import { useRef, useState, useEffect, Fragment } from 'react'
import '../css/Todo.css'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

import dayjs from 'dayjs'

function Todo() {
  const today = dayjs(new Date()).format('YYYY-MM-DD')
  const todaydate = () => {
    const arr = today.split('-')
    return `${arr[1]}/${arr[2]}`
  }
  const [createbtn, setCreatebtn] = useState(true)
  const [selectvalue, setSelectvalue] = useState('SHOPPING')
  const [dateselect, setDateselect] = useState(todaydate)
  const [inputdate, setInputdate] = useState(today)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [liList, setliList] = useState([])
  const [itemId, setItemId] = useState(0)
  const [filternum, setFilternum] = useState(-1)

  const add_new = () => {
    setCreatebtn(!createbtn)
  }
  const class_li = ['list_shopping', 'list_work', 'list_sport', 'list_music']

  let select_opt = 0
  const add_to_list = () => {
    switch (selectvalue) {
      case 'SHOPPING':
        select_opt = 0
        break
      case 'WORK':
        select_opt = 1
        break
      case 'SPORT':
        select_opt = 2
        break
      case 'MUSIC':
        select_opt = 3
        break
    }
    const liclassname = class_li[select_opt]
    const num = itemId + 1
    createLifun(selectvalue, title, description, dateselect, liclassname, num)
    setItemId(num)
    setCreatebtn(true)
    setSelectvalue('SHOPPING')
    setTitle('')
    setDescription('')
  }

  const createLifun = (topic, title, desc, date, className, idnum) => {
    let newLi = {
      li: (
        <li className={`${className} li_num_${idnum}`}>
          <div className="col_md_1_list">
            <p>{topic}</p>
          </div>
          <div className="col_md_2_list">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
          <div className="col_md_3_list">
            <div className="cont_text_date">
              <p>{date}</p>
            </div>
            <div className="cont_btns_options">
              <ul>
                <li>
                  <a
                    href="#/"
                    onClick={() => {
                      console.log('按了')
                      setFilternum(idnum)
                    }}
                  >
                    <FaTrashAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ),
      id: idnum,
    }
    const updatelist = [...liList, newLi]
    setliList(updatelist)
    const localStoragedailyitem = JSON.parse(localStorage.getItem('dailyitem'))
    const dailyitem = [
      ...localStoragedailyitem,
      { title: title, desc: desc, date: date },
    ]

    const dailyitemtostring = JSON.stringify(dailyitem)
    localStorage.setItem('dailyitem', dailyitemtostring)
  }
  console.log('liList1', liList)
  useEffect(() => {
    const finish_action = function (liId) {
      console.log('liId', liId)
      console.log('liListold', liList)

      const clearfinishedlist = liList.filter((v, i) => {
        console.log('value.id', v.id)
        return v.id !== liId
      })
      console.log('clearfinishedlist', clearfinishedlist)
      setliList(clearfinishedlist)
    }
    finish_action(filternum)
  }, [filternum])

  useEffect(() => {
    localStorage.setItem('dailyitem', '[]')

    createLifun(
      'SHOPPIGN',
      '買衛生紙',
      '家樂福有折扣優惠',
      '04/29',
      'list_shopping',
      itemId
    )
  }, [])

  return (
    <>
      {console.log('return')}
      <div className="cont_principal">
        <div className="cont_centrar">
          <div className="cont_todo_list_top">
            <div className="cont_titulo_cont">
              <h3>THINGS TO DO</h3>
            </div>

            <div
              className={
                createbtn
                  ? 'cont_add_titulo_cont'
                  : 'cont_add_titulo_cont cont_add_titulo_cont_active'
              }
            >
              <a href="#/" onClick={add_new} className="h-100 ">
                <FaEdit />
              </a>
            </div>

            {/* <!--   End cont_todo_list_top  -->   */}
          </div>
          <div
            className={
              createbtn
                ? 'cont_crear_new'
                : 'cont_crear_new cont_crear_new_active'
            }
          >
            <table className="table">
              <tr>
                <th>Action</th>
                <th>Title</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>
                  <select
                    name=""
                    onChange={(e) => {
                      setSelectvalue(e.target.value)
                    }}
                    value={selectvalue}
                  >
                    <option value="SHOPPING">SHOPPING</option>
                    <option value="WORK">WORK</option>{' '}
                    <option value="SPORT">SPORT</option>{' '}
                    <option value="MUSIC">MUSIC</option>
                  </select>
                  {/* <!-- End td 1 --> */}
                </td>
                <td>
                  <input
                    type="text"
                    className="input_title_desc"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                  />

                  {/* <!-- End td 2 --> */}
                </td>
                <td>
                  <input
                    name=""
                    type="date"
                    className="input_description_title"
                    id="date_select"
                    value={inputdate}
                    onChange={(e) => {
                      console.log('datestr', e.target.value)
                      const datearr = e.target.value.split('-')
                      console.log('datearr', datearr)
                      const date = `${datearr[1]}/${datearr[2]}`
                      console.log('date', date)
                      setDateselect(date)
                      setInputdate(e.target.vale)
                    }}
                  />

                  {/* <!-- End td 3 --> */}
                </td>
              </tr>
              <tr>
                <th className="titl_description">Description</th>
              </tr>
              <tr>
                <td colSpan="3">
                  <input
                    type="text"
                    className="input_description"
                    value={description}
                    required
                    onChange={(e) => {
                      setDescription(e.target.value)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <button className="btn_add_fin" onClick={add_to_list}>
                    ADD
                  </button>
                </td>
              </tr>
            </table>
            {/* <!--   End cont_crear_new  -->  */}
          </div>

          <div className="cont_princ_lists">
            <ul>
              {liList.map((v, i) => {
                return <Fragment key={i}>{v.li}</Fragment>
              })}
              {/* <li className="list_shopping li_num_0_1">
                <div className="col_md_1_list">
                  <p>SHOPPIGN</p>
                </div>
                <div className="col_md_2_list">
                  <h4>BUY COFFEE BEANS</h4>
                  <p>DODIDONE COFFEE STORE</p>
                </div>
                <div className="col_md_3_list">
                  <div className="cont_text_date">
                    <p>TODAY</p>
                  </div>
                  <div className="cont_btns_options">
                    <ul>
                      <li>
                        <a href="#/" onClick="finish_action('0','0_1');">
                          <i className="material-icons">&#xE5CA;</i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              {/* <!-- <li className="list_work"></li>
     <li className="list_sport"></li>
     <li className="list_music"></li>
    -->   */}
            </ul>
            {/* <!--   End cont_todo_list_top  -->   */}
          </div>

          {/* <!--   End cont_central  --> */}
        </div>
      </div>
    </>
  )
}

export default Todo
