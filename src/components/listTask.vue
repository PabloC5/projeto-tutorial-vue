<template>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-card title="Todo List tutorial">
              <b-table striped hover :items="tasks" :fields="fields">
                <template v-slot:cell(actions)="data">
                  <b-button class="m-1" @click="removeTask(data.item.id)" variant="danger" size="sm">Delete</b-button>
                  <b-button @click="editTask(data.item.id)" variant="primary" size="sm">Editar</b-button>
                </template>
              </b-table>
                
              <b-form @submit.prevent="addTask">
                <b-row>
                    <b-col>
                        <b-form-group label-for="taskInput">
                        <b-input
                            id="taskInput"
                            v-model="newTask"
                            required
                            placeholder="Enter a new task"
                        ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-button class="ajusta" type="submit" variant="primary">Adicionar tarefa</b-button>
                    </b-col>
                </b-row>
                
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, Nome: "Tarefa 1" },
          { id: 2, Nome: "Tarefa 2" },
        ],
        newTask: "",
        fields: ["Nome", "actions"],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== "") {
          this.tasks.push({ id: Date.now(), text: this.newTask });
          this.newTask = "";
        }
      },
      removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
    },
  };
  </script>

<style>
    .ajusta {
        margin-left: -442px;
    }
</style>
  