class ApplicationController < ActionController::API

  def auth_header
    request.headers['Authorization']
  end
 
  def token
    if auth_header
      auth_header.split(' ')[1]
    end
  end

  def current_user
    if token
      @user = User.find_by(api_key: token)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { error: 'Not Authorized' }, status: :unauthorized unless logged_in?
  end

end
