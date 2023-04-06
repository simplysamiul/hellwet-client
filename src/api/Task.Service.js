import httpReq from "./http.service";

class TaskSevice{
    async getAllTasks() {
        const { data } = await httpReq.get("/alltasks");
        return data;
    };

    async deleteTask(id) {
        const { data} = await httpReq.delete(`/task/${id}`);
        return data;
    };

    async createTask(taskInfo) {
        const { data } = await httpReq.post("/task", taskInfo);
        return data;
    }
}

export default new TaskSevice;