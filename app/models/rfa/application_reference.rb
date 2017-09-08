class Rfa::ApplicationReference < CalsBase
  include Concerns::Rfa::ApplicationReferenceApiProtocolProvider

  attr_accessor :references

  def self.parent_path
    'rfa-1a-forms'
  end

  def self.api_resource_path
    'references'
  end
end
