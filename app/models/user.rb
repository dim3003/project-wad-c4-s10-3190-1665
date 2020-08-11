class User < ApplicationRecord
  has_many :tips
  has_many :comments

  has_and_belongs_to_many :favourites, class_name: Tip.name

  has_secure_password

  validates :email, presence: true,
                    uniqueness: true

  after_initialize :default_role!


  def downcase_email
    self.email = email.downcase if email
  end
  
  def default_role!
    self.role ||= 'registered'
  end

  paginates_per 6
end
