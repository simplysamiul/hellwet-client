import httpReq from "./http.service";

class TaskSevice{
    async getAllTasks() {
        const { data } = await httpReq.get("/alltasks");
        return data;
    }
}

export default new TaskSevice;