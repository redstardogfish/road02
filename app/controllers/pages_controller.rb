class PagesController < ApplicationController
  def home
    @bodyclass = "home"
  end
  
  

  def whoWeAre
  end

  def ourDNA
    @bodyclass = "content"
  end

  def ourCommunity
    @bodyclass = "peopleListing"
    @people = Person.all
  end
  
  def theSecondRoad
    @bodyclass = "content"
  end
  
  def thinkingLab
    @bodyclass = "contentColumns"
  end
  
  

  def whatWeDo
  end

  def strategy
    @bodyclass = "contentColumns"
  end

  def innovation
    @bodyclass = "contentColumns"
  end

  def engagement
    @bodyclass = "contentColumns"
  end

  def clarity
    @bodyclass = "contentColumns"
  end


  def temp
    @bodyclass = "content"
  end
  def temp2

  end

end
