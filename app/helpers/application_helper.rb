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

end
