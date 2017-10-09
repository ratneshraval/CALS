class GeoserviceController < CalsBaseController
  def create
    @suggestion_suggest = geoservice_helper.suggest(params)
    render :json =>  @suggestion_suggest
  end
  def validate
    post_data = request.body.read
    parsed_post_data = JSON.parse(post_data)
    @suggestion_validate = geoservice_helper.validate(parsed_post_data)
    json_response  @suggestion_validate
  end

  def geoservice_helper
    Helpers::GeoserviceHelper.new(auth_header: get_session_token)
  end
end
