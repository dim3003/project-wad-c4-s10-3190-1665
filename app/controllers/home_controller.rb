class HomeController < ApplicationController
  include RolesHelper

  def index
    @tips = Tip.most_recent
  end
end
