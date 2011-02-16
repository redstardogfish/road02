require 'spec_helper'

describe PagesController do

  describe "GET 'whoWeAre'" do
    it "should be successful" do
      get 'whoWeAre'
      response.should be_success
    end
  end

  describe "GET 'ourDNA'" do
    it "should be successful" do
      get 'ourDNA'
      response.should be_success
    end
  end

  describe "GET 'ourCommunity'" do
    it "should be successful" do
      get 'ourCommunity'
      response.should be_success
    end
  end

  describe "GET 'whatWeDo'" do
    it "should be successful" do
      get 'whatWeDo'
      response.should be_success
    end
  end

  describe "GET 'strategy'" do
    it "should be successful" do
      get 'strategy'
      response.should be_success
    end
  end

  describe "GET 'innovation'" do
    it "should be successful" do
      get 'innovation'
      response.should be_success
    end
  end

end
