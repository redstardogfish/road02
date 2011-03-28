module ApplicationHelper

  def example(options={}, &block)
    out = render :partial => 'examples/header', :locals => {:options => options}
    out << capture(&block)
    out << (render :partial => 'examples/footer', :locals => {:options => options})
    out
  end
  
#   generates line items for main menu - so that the active item is persistent
  def activate_li(li_class)
    tag(:li, {:id => li_class, :class => (li_class == @menuitem? "active menu_trigger" : "menu_trigger" ) }, true)
  end 



#  these are for making random moasics of images from a numbered image collection.
  def image_array(number)
    random_array_elements = (0..(number*3-1)).to_a.sort_by{rand}  
    the_right_number_of_them = (number..(number*2)).to_a.sort_by{rand}.first
    image_tag_series = []
    random_array_elements[0..the_right_number_of_them].each do |slot| 
      while image_tag_series[slot] == nil
        possible = generate_image_tag
        image_tag_series[slot] = possible unless image_tag_series.include?(possible)
      end
    end
    return image_tag_series
  end
  
  def generate_image_tag
    # this one is for the longer set of photos - didn't seem to work on heroku.
    image_number = (1..83).to_a.sort_by{rand}.first.to_i
    image_number = (image_number+1000).to_s
    name_fragment = image_number[1..-1]

    # this one for the 24 placeholder pngs
    # image_number = (1..24).to_a.sort_by{rand}.first.to_s
    # name_fragment = image_number

    image_name = "placeholders/"+name_fragment+".jpg"
    image_tag(image_name, :alt => "")
  end

end
