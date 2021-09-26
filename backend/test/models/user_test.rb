require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'user should create with valid params' do
    assert_difference 'User.count' do
      User.create(name: '山田 太郎', email_address: 'test@example.com')
    end
  end

  test 'user should not create without name attribute' do
    user = User.new(email_address: 'test@example.com')

    user.save

    assert_not user.valid?
    assert_equal 0, User.count
  end

  test 'user should not create without email attribute' do
    user = User.new(name: '山田 太郎')

    user.save

    assert_not user.valid?
    assert_equal 0, User.count
  end

  test 'user should not create when email_address is invalid' do
    user = User.new(name: '山田 太郎', email_address: 'test')

    user.save

    assert_not user.valid?
    assert_equal 0, User.count
  end
end
