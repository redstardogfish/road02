class PagesController < ApplicationController
  def home
    @bodyclass = "home"
    @width = 720
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
  
  

  def what_we_do
    @bodyclass = "home"
    @width = 12000
    @menuitem = "whatWeDo"
  end

  def strategy
    @bodyclass = "contentColumns"
    @menuitem = "strategize"
  end

  def innovation
    @bodyclass = "contentColumns"
    @menuitem = "innovate"
  end

  def engagement
    @bodyclass = "contentColumns"
    @menuitem = "engage"
  end

  def clarity
    @bodyclass = "contentColumns"
    @menuitem = "clarify"
  end


  def temp
    @bodyclass = "home"
    @width = 12000

  end
  def temp2

  end

end
