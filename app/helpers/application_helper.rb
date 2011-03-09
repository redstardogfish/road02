module ApplicationHelper

  def example(options={}, &block)
    out = render :partial => 'examples/header', :locals => {:options => options}
    out << capture(&block)
    out << (render :partial => 'examples/footer', :locals => {:options => options})
    out
  end
  
  
  def activate_li(li_class)
    tag(:li, {:class => ("active" if li_class == @menuitem) }, true)
  end 

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
    # image_number = (1..83).to_a.sort_by{rand}.first.to_i
    # image_number = (image_number+1000).to_s
    # name_fragment = image_number[1..-1]

    image_number = (1..24).to_a.sort_by{rand}.first.to_s
    name_fragment = image_number

    image_name = "placeholders/"+name_fragment+".png"
    image_tag(image_name, :alt => "")
  end

end
