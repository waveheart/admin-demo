<template>
  <div class="app-container">
    <div class="filters">
      <Vfilter ref="vfilter" @filterInfo="fetchFilteredInfo" @clearFiter="fetchData"></Vfilter>
    </div>
    <el-table :data="currentList" v-loading.body="listLoading" element-loading-text="Loading" border stripe fit highlight-current-row>
      <el-table-column align="center" label='序号' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.age}}</span>
        </template>
      </el-table-column>
      <el-table-column label="毕业院校" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.college}}
        </template>
      </el-table-column>
      <el-table-column label="婚否" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.married}}
        </template>
      </el-table-column>
      <el-table-column label="学历" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.degree}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="毕业时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.birth}}</span>
        </template>
      </el-table-column>
      <el-table-column label="其他信息">
        <template slot-scope="scope">
          {{scope.row.desc}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    class="pagination"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    layout="prev, pager, next"
    :page-size="10"
    :total="list && list.length">
  </el-pagination>
  </div>
</template>

<script>
import { getList, getFilteredInfo } from '@/api/table'
import Vfilter from './filter.vue'

export default {
  data() {
    return {
      list: null,
      currentList: null,
      listLoading: true, // 显示loding
      currentPage: 1, // 当前页面
      name_list: null
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {

  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        // 处理接受到的数据
        this.handleReceivedInfo(response)
      })
    },
    // 筛选数据
    fetchFilteredInfo() {
      this.listLoading = true
      getFilteredInfo(this.$refs.vfilter.filters).then(response => {
        this.handleReceivedInfo(response)
      })
    },

    // 处理接受数据
    handleReceivedInfo(response) {
      this.list = response.data
      this.listLoading = false
      // 先取前10个数据
      var temp_arr = []
      this.list.forEach((item, index) => {
        // statements
        temp_arr.push(item.name)
      })
      this.name_list = temp_arr
      this.currentList = this.list.slice(0, 10)
    },

    /*
    ** 处理页码改变
     */
    handleCurrentChange(val) {
      const star = (val - 1) * 10
      const end = val * 10
      this.currentList = this.list.slice(star, end)
    },
    /*
     * 处理筛选请求
     */
    filterInfo(filters) {
      console.log({ ...filters })
    }
  },
  components: {
    Vfilter
  }
}
</script>

<style>
.pagination {
  text-align: center;
  margin-top: 40px;
}
</style>