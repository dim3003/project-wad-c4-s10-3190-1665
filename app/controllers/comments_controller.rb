class CommentsController < ApplicationController
  before_action :set_tip

  before_action :ensure_authenticated, only: [:create]

  def create
    @comment = Comment.new(comment_params)
    @comment.tip = @tip

    # Needs to be changed: this always sets the User for a Comment to the first
    # User in the database, _not_ the User that POSTed the Comment.
    @comment.user = current_user

    @comment.save

  end

  private

    def set_tip
      @tip = Tip.find(params[:tip_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:body)
    end
end
