class Rfa::A01Controller < CalsBaseController
  #include AuthenticationProvider
  def index
    @applications = rfa_application_helper.all
  end

  def create
    # make api call to create application
    rfa_app_response = rfa_application_helper.create_application
    rfa_application = Rfa::Application.new
    rfa_application.id = rfa_app_response['id']
    redirect_to rfa_a01_packet_index_path(rfa_application.id)
  end

  def edit
    # @all dictionaries
    @dictionaries = dictionaries_helper.rfa_a01_dictioniaries
    @application = rfa_application_helper.find_by_id(params[:id])
    @application.applicants = rfa_applicant_helper.find_items_by_application_id(params[:id])
    @application.residence = rfa_residence_helper.find_by_application_id(params[:id])
    @application.applicantsHistory = rfa_applicant_history_helper.find_by_application_id(params[:id])
    @application.minorChildren = rfa_minor_children_helper.find_items_by_application_id(params[:id])
    @application.otherAdults = rfa_other_adults_helper.find_items_by_application_id(params[:id])
    @application.fosterCareHistory = rfa_adoption_history_helper.find_by_application_id(params[:id])
    @application.relationshipBetweenApplicants = rfa_relation_between_applicants_helper.find_by_application_id(params[:id])
    @application.childDesired = rfa_child_desired_helper.find_by_application_id(params[:id])
    @application.references = rfa_references_helper.find_items_by_application_id(params[:id])
  end

  def update
    @application_response = {}
    @application_response[:application_county] = process_items_for_persistance(application_county_params, rfa_application_helper, params[:id]) if params[:application_county].present?
    @application_response[:applicants] = process_items_for_persistance(applicant_params, rfa_applicant_helper, params[:id]) if params[:applicants].present?
    @application_response[:residence] = process_items_for_persistance(residence_params, rfa_residence_helper, params[:id]) if params[:residence].present?
    @application_response[:applicantsHistory] = process_items_for_persistance(applicants_history_params, rfa_applicant_history_helper, params[:id]) if params[:applicantsHistory].present?
    @application_response[:minorChildren] = process_items_for_persistance(minor_children_params, rfa_minor_children_helper, params[:id]) if params[:minorChildren].present?
    @application_response[:otherAdults] = process_items_for_persistance(other_adults_params, rfa_other_adults_helper, params[:id]) if params[:otherAdults].present?
    @application_response[:fosterCareHistory] = process_items_for_persistance(adoption_history_params, rfa_adoption_history_helper, params[:id]) if params[:fosterCareHistory].present?
    @application_response[:relationshipBetweenApplicants] = process_items_for_persistance(relationship_between_applicants_params, rfa_relation_between_applicants_helper, params[:id]) if params[:relationshipBetweenApplicants].present?
    @application_response[:references] = process_items_for_persistance(references_params, rfa_references_helper, params[:id]) if params[:references].present?
    @application_response[:childDesired] = process_items_for_persistance(child_desired_params, rfa_child_desired_helper, params[:id]) if params[:childDesired].present?
    @application_response[:references] = process_items_for_persistance(references_params, rfa_references_helper, params[:id]) if params[:references].present?

    #TODO:MAYBE on update we need to create the relevant rfa 01b forms for all
    # applicatns, other adults, and minorchildren IF generation is to be automatic
    # create_rfa_01b_forms(@application_response[:applicants], params[:id])  if @application_response[:applicants].present?
    # create_rfa_01b_forms(@application_response[:otherAdults], params[:id]) if @application_response[:otherAdults].present?
  end

  private

  def application_county_params
    params.permit(:id, :to_delete, {application_county: %i[value id]})
  end

  def applicant_params
    params.require(:applicants).map do |applicant|
      applicant.permit!
      ActionController::Parameters.new(applicant.to_h).permit(:id, :to_delete, :email,
                                                              :date_of_birth, :first_name, :middle_name, :last_name, :driver_license_number,
                                                              { name_suffix: %i[id value] }, { name_prefix: %i[id value] },
                                                              { employment: [:employer_name, :occupation, :income, income_type: %i[id value],
                                                                             physical_address: [:street_address, :city, :zip, state: %i[id value]]] },
                                                              { highest_education_level: %i[id value] }, { gender: %i[id value] },
                                                              { ethnicity: %i[id value] }, { driver_license_state: %i[id value] },
                                                              phones: [:to_delete, :number, :preferred, phone_type: %i[id value]],
                                                              other_names: [:first_name, :middle_name, :last_name, name_type: %i[id value],
                                                                            name_suffix: %i[id value], name_prefix: %i[id value]])
    end
  end

  def residence_params
    params.require(:residence).permit(:id, :to_delete, :physical_mailing_similar, :weapon_in_home,
                                      :body_of_water_exist, :body_of_water_description, :others_using_residence_as_mailing,
                                      :directions_to_home, residence_ownership: %i[id value], home_languages: %i[id value],
                                      other_people_using_residence_as_mailing: %i[first_name middle_name last_name],
                                      physical_address: [:street_address, :zip, :city, state: %i[id value]],
                                      addresses: [:street_address, :zip, :city, state: %i[id value], type: %i[id value]])
  end

  def applicants_history_params
    params.require(:applicantsHistory).permit(:to_delete, former_spouses: [:first_name, :middle_name, :last_name,
                                                                           :applicant_id, :date_of_marriage, :place_of_marriage_city,
                                                                           :date_of_marriage_end, :place_of_marriage_end_city,
                                                                           relationship_type:  %i[id value],
                                                                           name_prefix:  %i[id value], name_suffix:  %i[id value],
                                                                           place_of_marriage_state:  %i[id value],
                                                                           marriage_termination_reason:  %i[id value],
                                                                           place_of_marriage_end_state:  %i[id value]],
                                              adult_children: [:first_name, :middle_name, :last_name, :lives_in_home,
                                                               name_prefix: %i[id value], name_suffix: %i[id value],
                                                               address: [:street_address, :zip, :city, state: %i[id value], type: %i[id value]],
                                                               relationship_to_applicants: [:applicant_id, relationship_to_applicant: %i[id value]]])
  end

  def minor_children_params
    params.require(:minorChildren).map do |minor|
      minor.permit!
      minor = set_relationship_to_applicants(minor, @application_response[:applicants])
      ActionController::Parameters.new(minor.to_h).permit(
        :id, :to_delete, :child_financially_supported, :date_of_birth, :child_adopted, gender: %i[id value],
        relationship_to_applicants: [:applicant_id, relationship_to_applicant: %i[id value]]
      )
    end
  end

  def other_adults_params
    params.require(:otherAdults).map do |adult|
      adult.permit!
      adult = set_relationship_to_applicants(adult, @application_response[:applicants])
      ActionController::Parameters.new(adult.to_h).permit(
        :id, :to_delete, :first_name, :middle_name, :last_name, :date_of_birth,
        relationship_to_applicants: [:applicant_id, relationship_to_applicant: %i[id value]]
      )
    end
  end

  def relationship_between_applicants_params
    params.require(:relationshipBetweenApplicants).permit(:to_delete, :other_relationship, :place_of_relationship_city,
                                                          :date_of_relationship, relationship_type: %i[id value],
                                                          place_of_relationship_state: %i[id value])
  end


  def child_desired_params
    params.require(:childDesired).permit(:to_delete, :child_identified, :child_in_home, preferred_ages: %i[id value],
                                         preferred_sibling_group_up_to: %i[id value])
  end

  def adoption_history_params
    params.require(:fosterCareHistory).permit(:id, :to_delete, :was_subject_for_exclusion_order_q7,
                                              foster_care_licenses_q1: [:was_previously_licensed, agencies: [:name, type: %i[id value]]],
                                              applications_for_adoption_q2: [:have_applied_for_adoption, facilities: []],
                                              facility_operation_licenses_q3: [:was_previously_licensed, agencies: [:name, type: %i[id value]]],
                                              employment_in_facilities_q4: [:was_employed_or_volunteered, facilities: []],
                                              denial_history_q5: [:had_denials, agencies: [:name, type: %i[id value]]],
                                              suspension_revocation_history_q6: [:had_suspensions_revocations, agencies: [:name, type: %i[id value]]])
  end

  def references_params
    permitted_params = params.permit(:to_delete, references: [:first_name, :middle_name, :last_name, :phone_number, :email,
                                                              mailing_address: [:street_address, :zip, :city, state: %i[id value]],
                                                              name_prefix: %i[id value], name_suffix: %i[id value]])

    permitted_params[:items] = permitted_params.delete(:references)
    permitted_params
  end

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end

  def rfa_b01_application_helper
    Helpers::Rfa::B01::ApplicationHelper.new(auth_header: get_session_token)
  end

  def rfa_applicant_helper
    Helpers::Rfa::ApplicantHelper.new(auth_header: get_session_token)
  end

  def rfa_applicant_history_helper
    Helpers::Rfa::ApplicantHistoryHelper.new(auth_header: get_session_token)
  end

  def rfa_residence_helper
    Helpers::Rfa::ApplicationResidenceHelper.new(auth_header: get_session_token)
  end

  def rfa_adoption_history_helper
    Helpers::Rfa::AdoptionHistoryHelper.new(auth_header: get_session_token)
  end

  def rfa_minor_children_helper
    Helpers::Rfa::ApplicationMinorChildrenHelper.new(auth_header: get_session_token)
  end

  def rfa_other_adults_helper
    Helpers::Rfa::ApplicationOtherAdultsHelper.new(auth_header: get_session_token)
  end

  def rfa_relation_between_applicants_helper
    Helpers::Rfa::ApplicationRelationApplicantsHelper.new(auth_header: get_session_token)
  end

  def rfa_child_desired_helper
    Helpers::Rfa::ApplicationChildDesiredHelper.new(auth_header: get_session_token)
  end

  def rfa_references_helper
    Helpers::Rfa::ApplicationReferencessHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
