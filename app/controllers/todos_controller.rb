class TodosController < ApplicationController
  before_filter :find_todo, :except => [:index, :create]

  def index
    render json: Todo.all
  end

  def create
    @todo = Todo.new :title => params[:title]
    if @todo.save
      render json: @todo
    else
      render status: 500, json: {error: "Todo invalid"}
    end
  end

  def show
    render json: @todo
  end

  def update
    render json: @todo
  end

  def destroy
    if @todo.destroy
      render json: {destroyed: true}
    else
      render status: 500, json: {destroyed: false}
    end
  end

  private
  def find_todo
    @todo = Todo.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render status: 404, json: {error: "Not found"}
  end
end
