<template>
  <div class="filter_wrapper">
    <el-form ref="form" :model="filters" label-width="120px" class="filter_form">
      <el-form-item label="姓名">
        <el-input v-model="filters.name" class="s_input" @change="handleinputChage"></el-input>
      </el-form-item>
      <el-form-item label="年龄" class="age">
        <!-- <span>年龄</span> -->
        <!-- <el-select placeholder="<" v-model="filters.operation_symbol"  @change="handleinputChage" class="operation_symbol">
          <el-option label="<" value="<"></el-option>
          <el-option label="=" value="="></el-option>
          <el-option label=">" value=">"></el-option>
        </el-select> -->
        <el-input v-model="filters.age" class="s_input" @change="handleinputChage" type="number" min="16" max="100"></el-input>
      </el-form-item>
      <el-form-item label="毕业院校">
        <el-select v-model="filters.college" placeholder=""  @change="handleinputChage">
          <el-option label="清华大学" value="qinghua university"></el-option>
          <el-option label="北京大学" value="peking university"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="婚否">
        <el-select v-model="filters.married" placeholder=""  @change="handleinputChage">
          <el-option label="已婚" value="1"></el-option>
          <el-option label="未婚" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历">
        <el-select v-model="filters.degree" placeholder=""  @change="handleinputChage">
          <el-option label="大专" value="college"></el-option>
          <el-option label="本科" value="bachelor"></el-option>
          <el-option label="研究生" value="master"></el-option>
          <el-option label="博士" value="doctor"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="filterInfo">筛选</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clearFiter">清空筛选</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      filters: {
        name: '',
        age: null,
        college: '',
        married: '',
        degree: '',
        operation_symbol: ''
      }
    }
  },
  props: {
  },
  watch: {
    // filters(newval, oldval) {
    //   console.log(newval,oldval)
    // }
  },
  methods: {
    handleinputChage() {
      // console.log(this.filters)
    },
    filterInfo() {
      this.$emit('filterInfo', this.filters)
    },
    clearFiter() {
      this.$emit('clearFiter')
    }
  }
}
</script>

<style>
.filter_form {
  display: flex;
}   
</style>