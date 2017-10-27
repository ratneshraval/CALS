class Rfa::B01Controller < CalsBaseController


  def create_applicant
    create(params[:applicant_id], 'applicants')
  end

  def create_other_adult
    create(params[:other_adult_id],'other-adults')
  end

  def edit
    @dictionaries = dictionaries_helper.rfa_b01_dictioniaries
    # @application = rfa_b01_application_helper.find_by_id(params[:id])
  end

  def update; end

  private

  def create(resource_id, resource_path)
    rfa_b01_response = rfa_b01_application_helper.create_application(params[:a01_id], resource_id, resource_path)
    rfa_b01_application = Rfa::B01::Application.new
    rfa_b01_application.id = rfa_b01_response['id']
    redirect_to edit_rfa_b01_path(rfa_b01_application.id)
  end

  def rfa_b01_application_helper
    Helpers::Rfa::B01::ApplicationHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
