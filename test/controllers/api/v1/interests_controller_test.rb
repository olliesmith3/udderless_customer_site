require 'test_helper'

class InterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interest = interests(:one)
  end

  test "should create register interest" do
    assert_difference('Interest.count') do
      post interests_url, params: { interest: { first_name: 'Ollie', postcode: 'RH5 5JJ', email: 'ollie@ollie.com', tel: '0712345' } }
    end
  end
end