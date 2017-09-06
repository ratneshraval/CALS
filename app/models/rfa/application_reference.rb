class Rfa::ApplicationReference < CalsBase
  include Concerns::Rfa::ApplicationReferenceApiProtocolProvider

  attr_accessor :first_name, :middle_name,:last_name,
                :phone_number, :email, :state, :street_address, :zip, :city,:state,
                :name_suffix, :name_prefix

  def self.parent_path
    'rfa-1a-forms'
  end

  def self.api_resource_path
    'reference'
  end
end