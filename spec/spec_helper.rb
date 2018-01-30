require "simplecov"
require 'webmock/rspec'
require 'selenium/webdriver'

SimpleCov.start 'rails' do
  coverage_dir 'reports/coverage/rspec/'

  add_filter '/test/'
  add_filter '/config/'
  add_filter '/vendor/'
  add_filter '/docker/'
  add_filter '/log/'
  add_filter '/spec/'

  add_filter 'app/controllers/pages_controller'

  add_filter 'app/mailers/'
  add_filter 'app/jobs/'
  add_filter 'app/helpers/'
  add_filter 'app/channels/'

  add_group 'Classes', 'app/classes'
  add_group 'Controllers', 'app/controllers'
  add_group 'Models', 'app/models'

  minimum_coverage 90 unless ENV['TEST_END_TO_END']
end

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  config.include FactoryGirl::Syntax::Methods
  config.shared_context_metadata_behavior = :apply_to_host_groups
  config.filter_run_when_matching :focus
  config.example_status_persistence_file_path = "reports/rspec_test_results.txt"
  #config.disable_monkey_patching!
  config.default_formatter = 'doc' if config.files_to_run.one?
  config.order = :random
  Kernel.srand config.seed
end
