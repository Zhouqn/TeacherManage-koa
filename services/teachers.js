const teacherModel = require('./../models/teachers')
const {formatDate} = require('../utils/tools')

const teacher = {

    //获取教师信息列表
    async getTeacherList( query ) {
        let resultData = await teacherModel.getTeacherList(query)
        if(resultData){
            let teacherResult = {
                teachers: resultData.result_part,
                total: resultData.result_part.length,
                totalPage: Math.ceil(resultData.result_all.length / (~~query.count)),
                page:~~query.page,
                count:~~query.count
            }
            return teacherResult
        }else {
            return null
        }


    },

    //获取某个教师信息列表
    async getOneTeacher( t_id) {
        const resultData = await teacherModel.getOneTeacher(t_id)
        return resultData
    },


    //添加教师
    async addTeacher(data) {
        const teacherInfo = {
            ...data,
        }
        const resultData = await teacherModel.addTeacher(teacherInfo)
        return resultData
    },

    // 编辑教师信息
    async editTeacher(data) {
        const teacherInfo = {
            ...data,
            birthDay: formatDate(data.birthDay),
            joinDate: formatDate(data.joinDate)
        }
        const resultData = teacherModel.editTeacher(teacherInfo)
        return resultData
    },

    //删除教师信息
    async deleteTeacher(query) {
        const t_id =  ~~query.id
        const resultData = teacherModel.deleteTeacher(t_id)
        return resultData
    }

}

module.exports = teacher