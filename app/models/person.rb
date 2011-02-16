# == Schema Information
# Schema version: 20110215082137
#
# Table name: people
#
#  id         :integer         not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  short_bio  :text
#  created_at :datetime
#  updated_at :datetime
#

class Person < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :short_bio
end
