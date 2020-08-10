class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :format_time

  def format_time(instance)
    instance.created_at.strftime("%e %b %Y at %H:%M")
  end
end
