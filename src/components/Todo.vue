<template>  
  <div>
    <h1>Todo List</h1>
      <el-input ref="new_task" class="task-input" placeholder="追加するタスクを入力してね" v-model="newTask" @keydown.enter.native="addTask"></el-input>
      <el-button type="primary" plain @click="addTask">追加</el-button>
    <el-table
      :data="list"
      stripe
      class="list">
      <el-table-column>
        <template slot-scope="scope">
          <span :class="{ complete: scope.row.isComplete }">{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="scope.row.isComplete=true" type="primary" plain size="small" v-if="!scope.row.isComplete">達成</el-button>
          <el-button @click="scope.row.isComplete=false" type="warning" plain size="small" v-if="scope.row.isComplete">取り消し</el-button>
          <el-button @click="deleteTask(scope.row)" type="danger" plain size="small">削除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      list: [
        {id: 1, value: "靴をおろす", isComplete: false},
        {id: 2, value: "風呂のカビ取り", isComplete: false},
        {id: 3, value: "電気を消して寝る", isComplete: false}
      ],
      newTask: "",
      nextId:  4
    } 
  },
  methods: {
    addTask() {
      if(!this.newTask.trim()) {
        return
      }
      this.list.push({
        id: this.nextId++,
        value: this.newTask,
        isComplete: false
      })
      this.newTask = ""
    },
    deleteTask(obj) {
      this.list = this.list.filter(e => e !== obj)
    }
  },
  mounted() {
    this.$refs.new_task.focus()
  }
}
</script>

<style>
  .list {
    width: 70% !important;
    margin: auto;
    text-align: left;
  }
  .complete {
      text-decoration: line-through;
  }
  h1 {
      position: relative;
      line-height: 1.4;
  }
  h1:before { 
      font-family: "Font Awesome 5 Free";
      content: "\f00c";
      font-size: 0.7em;
      left: 0;
      top: 0;
      color: #5ab9ff;
  }
  .task-input {
      width: 60% !important;
  }
  .el-table {
      padding: 8px;
  }
  .list >>> td {
    padding: 5px;
  }
</style>