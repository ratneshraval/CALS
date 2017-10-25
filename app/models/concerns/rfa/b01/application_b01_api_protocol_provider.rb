module Concerns::Rfa::B01::ApplicationB01ApiProtocolProvider
  extend ActiveSupport::Concern
  include Concerns::RfaBaseApiProtocolProvider

  class_methods do
    def create_application(auth_header,applicationId, applicantId)
      response = FaradayCals.post("/rfa-1a-forms/#{applicationId}/rfa-1b-forms/applicants/#{applicantId}", auth_header, '{}')
      JSON.parse(response.body)
    end

    def all(auth_header, application_id)
      response = FaradayCals.get("/rfa-1a-forms/#{application_id}/rfa-1b-forms/", auth_header)
      JSON.parse(response.body)
    end
  end
end
