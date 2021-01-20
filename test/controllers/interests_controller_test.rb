require 'test_helper'

class InterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interest = interests(:one)
  end

  test "should create register interest then redirect to thank you page" do
    assert_difference('Interest.count') do
      post interests_url, params: { interest: { first_name: 'Ollie', postcode: 'RH5 5JJ', email: 'ollie@ollie.com', tel: '0712345' } }
    end

    assert_redirected_to interest_url(Interest.last)
  end

  test "should show thank you page" do
    get interest_url(@interest)
    assert_response :success
  end
end
