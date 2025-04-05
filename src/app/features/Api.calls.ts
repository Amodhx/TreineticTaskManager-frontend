import axios from 'axios'
import {Task} from './tasks/TaskModel';
import {from, map} from 'rxjs';
import {UserModel} from './users/UserModel';

class ApiCalls {

  base_url: string = "http://localhost:5050/api/v1"

  api = axios.create({
    baseURL : this.base_url
  })

  async signIn(user:UserModel){
    try {
      const response:any = await this.api.post('/auth/signIn', user)
      if (response){
        return  response.data;
      }
      return []
    }catch (error){
      return Promise.reject(error);
    }
  }
  async signUp(user:UserModel){
    try {
      const response:any = await this.api.post('/auth/signUn', user)
      if (response){
        return  response.data;
      }
      return []
    }catch (error){
      return Promise.reject(error);
    }
  }
  async saveTask(task:Task){
    try {
        const response:any = await this.api.post('/task/saveTask', task, {
          headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
          }
        })
      if (response){
        return  response.data;
      }
      return []
    }catch (error){
      return Promise.reject(error);
    }
  }
  async getTasks(user_id:number){
    try {
      const response = await this.api.get(`/task/getAllTasks/${user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return from(Promise.resolve(response)).pipe(
        map(res => res.data || [])
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateTask(task:Task){
    try {
      const response:any = await this.api.patch('/task/updateTask', task, {
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response){
        return  response.data;
      }
      return []
    }catch (error){
      return Promise.reject(error);
    }
  }
  async deleteTask(task_id:number){
    try {
      const response = await this.api.delete(`/task/deleteTask/${task_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return from(Promise.resolve(response)).pipe(
        map(res => res.data || [])
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

}
const Api_Call = new ApiCalls();
export default Api_Call;
