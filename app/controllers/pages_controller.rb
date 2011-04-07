class PagesController < ApplicationController
  def home
    @bodyclass = "home"
    @width = 20000
  end
  
  def splash
    @bodyclass = "content"
    @width = 720
  end
  

  def whoWeAre
    @bodyclass = "content"
    @menuitem = "whoWeAre"
        @width = 8000
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
    @bodyclass = "home"
    @width = 12000

  end
  def temp2

  end

end
