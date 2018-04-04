<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="form.name" class="s_input"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" class="s_input" type="number" min="16" max="100"></el-input>
      </el-form-item>
      <el-form-item label="毕业院校">
        <el-select v-model="form.region" placeholder="毕业院校">
          <el-option label="清华大学" value="shanghai"></el-option>
          <el-option label="北京大学" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="毕业时间">
        <el-date-picker type="date" placeholder="选择你的毕业时间" v-model="form.date1" style="width: 360px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="婚否">
        <el-switch v-model="form.married"></el-switch>
      </el-form-item>
      <el-form-item label="学历">
        <el-radio-group v-model="form.education">
          <el-radio label="大专"></el-radio>
          <el-radio label="本科"></el-radio>
          <el-radio label="研究生"></el-radio>
          <el-radio label="博士"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="其他信息">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <!-- <el-button @click="onCancel">取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        age: '',
        region: '',
        date1: '',
        married: false,
        education: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('提交成功!')
    },
    onCancel() {
      this.$message({
        message: '已取消!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.s_input {
  width: 120px;
}
</style>

