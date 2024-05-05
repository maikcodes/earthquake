class HealthCheckController < ApplicationController
  def index
    if ActiveRecord::Base.connection.active?
      head :ok
    else
      head :service_unavailable
    end
  end
end
