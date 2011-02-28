class PagesController < ApplicationController
  def home
    @bodyclass = "home"
    @width = 6170
  end
  
  

  def whoWeAre
  end

  def ourDNA
    @bodyclass = "content"
    @menuitem = "ourDNA"
  end

  def ourCommunity
    @bodyclass = "peopleListing"
    @people = Person.all
    @menuitem = "ourCommunity"
  end
  
  def theSecondRoad
    @bodyclass = "content"
    @menuitem = "theSecondRoad"
  end
  
  def thinkingLab
    @bodyclass = "contentColumns"
    @menuitem = "thinkingLab"
  end
  
  

  def whatWeDo
  end

  def strategy
    @bodyclass = "contentColumns"
    @menuitem = "strategy"
  end

  def innovation
    @bodyclass = "contentColumns"
    @menuitem = "innovation"
  end

  def engagement
    @bodyclass = "contentColumns"
    @menuitem = "engagement"
  end

  def clarity
    @bodyclass = "contentColumns"
    @menuitem = "clarity"
  end


  def temp
    @bodyclass = "content"
    @menuitem = "ourDNA"
  end
  def temp2

  end

end
