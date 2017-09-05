class Rfa::ApplicationReference < CalsBase
  include Concerns::Rfa::ApplicationReferenceApiProtocolProvider

  def self.parent_path
    'rfa-1a-forms'
  end

  def self.api_resource_path
    'reference'
  end
end
