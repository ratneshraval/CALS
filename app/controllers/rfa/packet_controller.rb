class Rfa::PacketController < CalsBaseController

def index
  @application_id = params[:id]
end

  def rfa_applicant_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end
end
