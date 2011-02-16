class Article < ActiveRecord::Base
  attr_accessible :title, :author, :body
end
