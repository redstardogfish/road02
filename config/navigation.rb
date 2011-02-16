SimpleNavigation::Configuration.run do |navigation|  
  navigation.items do |primary|
    primary.item :whoWeAre, 'Who we are', "#" do |who|
      who.item :ourDNA, 'Our DNA', "#"
      who.item :ourCommunity, 'Our community', "#"
      who.item :theSecondRoad, 'The Second Road?', "#"
    end
    primary.item :whatWeDo, 'What we do', "#" do |what|
      what.item :strategy, 'Strategy', "#"
      what.item :innovation, 'Innovation', "#"
    end
  end
end