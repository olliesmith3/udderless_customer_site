require 'test_helper'

class InterestTest < ActiveSupport::TestCase
  test "postcode validation should trigger" do
    assert_not Interest.new(first_name: 'Jeremy', email: 'jez@hotmail.com').save
  end

  test "interest should save when postcode provided" do
    assert Interest.new(first_name: 'Jeremy', email: 'jez@hotmail.com', postcode: 'RH5 5JJ').save
  end
end
