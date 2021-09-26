class User < ApplicationRecord
  validates :name, presence: true
  validates :email_address,
            { presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i } }
end
