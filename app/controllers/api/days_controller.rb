require 'pry'

module Api
  class DaysController < ApplicationController
    def index
      @days = Day.all
      render json: {data: @days, message: 'All Clock In and Clock Out data'}, status: :ok
    end

    def create
      @last_day = Day.where(teacher_name: params[:teacher_name]).last
      # binding.pry
      if !@last_day || (@last_day && @last_day.clock_out_time)
        # binding.pry
        @day = Day.new(teacher_name: params[:teacher_name], clock_in_time: params[:time])
        if @day.save
          # binding.pry
          render json: {data: @day, message: 'Clock in time registered successfully!'}, status: :ok
        else
          # binding.pry
          render json: {message: @day.errors.full_messages}, status: :unprocessable_entity
        end
      else
        # binding.pry
        render json: {message: "Oops! Sorry #{@last_day.teacher_name}, you cannot clock in again before clocking out first."}, status: :unprocessable_entity
      end
    end

    def update
      if params[:teacher_name] == ''
        return render json: {message: 'Teacher name cannot be blank!'}, status: :unprocessable_entity
      end
      @day = Day.where(teacher_name: params[:teacher_name]).last
      # binding.pry
      if @day && @day.clock_in_time && !@day.clock_out_time
        @time_worked = params[:time].to_i - @day.clock_in_time.to_i
      # binding.pry
        @day.update_attributes(clock_out_time: params[:time], time_worked: @time_worked.to_s)
      # if @day.save
        render json: {data: @day, message: 'Clock out time registered successfully!'}, status: :ok
      else
        render json: {message: "Oops! Sorry #{params[:teacher_name]}, you cannot clock out before clocking in first."}, status: :unprocessable_entity
      end
    end

    private

    def day_params
      params.require(:day).permit(:teacher_name, :clock_in_time, :clock_out_time)
    end

  end
end
