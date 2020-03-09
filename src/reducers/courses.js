import * as coursesActions from '../actions/courses'
import { addDay, dateParse } from "../components/utils/dateParse";

const initialState = {
  isFetching: false,
  courses: [],
  coursesByCategories: [],
  course: {
    priceWay: "isPaid",
    dateWay: "with_date"
  },
  view: 'list',
  filters: {
    category_id: null,
    modality_id: null,
    name: null
  }
}

const coursesReducer = (state = initialState, action) => {

  switch(action.type) {

    case coursesActions.REQUEST_COURSES:
    return Object.assign({}, state, {
      isFetching: true
    });

    case coursesActions.REQUEST_GET_COURSE_SUCCEDED:
    return Object.assign({}, state, {
      course: action.course,
      isFetching: false,
      view: 'courseDetails'
    })

    case coursesActions.REQUEST_GET_COURSE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })    

    case coursesActions.REQUEST_GET_COURSES_SUCCEDED:
    return Object.assign({}, state, {
      courses: action.courses,
      isFetching: false
    });

    case coursesActions.REQUEST_GET_COURSES_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    });

    case coursesActions.SET_COURSE:
    return Object.assign({}, state, {
      course: action.course
    })

    case coursesActions.CANCEL_DELETE_COURSE:
    return Object.assign({}, state, {
      isFetching: false
    })    

    case coursesActions.VIEW_COURSE_DETAILS:
    return Object.assign({}, state, {
      course: action.course,
      view: 'courseDetails'
    })

    case coursesActions.EDIT_COURSE_DETAILS:
    return Object.assign({}, state, {
      course: Object.assign({}, action.course, {
        begin_date: dateParse(action.course.begin_date),
        end_date: dateParse(action.course.end_date),
        priceWay: coursesActions.coursePriceWay(action.course),
        dateWay: coursesActions.courseDateWay(action.course),
        original: action.course
      }),
      view: 'updateCourse',
      isFetching: false
    })

    case coursesActions.CANCEL_EDIT_COURSE:
    return Object.assign({}, state, {
      course: Object.assign({}, state.course.original,{
        original: null
      }),
      view: 'courseDetails'
    })

    case coursesActions.GO_BACK_TO_COURSES_LIST:
    return Object.assign({}, state, {
      course: {},
      view: 'list'
    })

    case coursesActions.REQUEST_UPDATE_COURSE_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      course: Object.assign({}, action.course, {
        original: action.course
      }),
      courses: state.courses.map((course) =>{
        if(parseInt(course.id, 10) === parseInt(action.course.id, 10)){
          return Object.assign({}, action.course, {
            original: action.course
          }) 
        }
        return course
      }),
      view: 'courseDetails'
    })

    case coursesActions.REQUEST_UPDATE_COURSE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.HANDLE_EDIT_INPUT_CHANGE:
    if(action.event.target.name === 'image' || action.event.target.name === 'document_description' ){
      if (action.event.target.name === "document_description"){
        const MB = 1000000;
        if (action.event.target.files[0] && action.event.target.files[0].size/MB > 10){
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              document_description: Object.assign({}, state.course.document_description, {
                error: 'El archivo excede el tamaño permitido (10 MB)'
              })
            })
          });
        }else{
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              [action.event.target.name]: action.event.target.files[0]
            })
          });  
        }
      }else{
        if (action.event.target.name === "image"){
          const MB = 1000000;
          if (action.event.target.files[0] && action.event.target.files[0].size/MB > 2){
            return Object.assign({}, state, {
              course: Object.assign({}, state.course, {
                image: Object.assign({}, state.course.image, {
                  error: 'El archivo excede el tamaño permitido (2 MB)'
                })
              })
            });
          }else{
            return Object.assign({}, state, {
              course: Object.assign({}, state.course, {
                [action.event.target.name]: action.event.target.files[0]
              })
            });  
          }
        }else{
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              [action.event.target.name]: action.event.target.files[0]
            })
          });
        }
      } 
    }else{
      if (
        action.event.target.name === "begin_date" ||
        action.event.target.name === "end_date"
      ){
        return Object.assign({}, state, {
          course: Object.assign({}, state.course, {
            [action.event.target.name]: addDay(action.event.target.value)
          })
        });
      }else{
        return Object.assign({}, state, {
          course: Object.assign({}, state.course, {
            [action.event.target.name]: action.event.target.value
          })
        });
      }
    }

    case coursesActions.HANDLE_NEW_INPUT_CHANGE:
    if(action.event.target.name === 'image' || action.event.target.name === 'document_description' ){
      if (action.event.target.name === "document_description"){
        const MB = 1000000;
        if (action.event.target.files[0] && action.event.target.files[0].size/MB > 10){
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              document_description: Object.assign({}, state.course.document_description, {
                error: 'El archivo excede el tamaño permitido (10 MB)'
              })
            })
          });
        }else{
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              [action.event.target.name]: action.event.target.files[0]
            })
          });  
        }
      }else{
        if (action.event.target.name === "image"){
          const MB = 1000000;
          if (action.event.target.files[0] && action.event.target.files[0].size/MB > 2){
            return Object.assign({}, state, {
              course: Object.assign({}, state.course, {
                image: Object.assign({}, state.course.image, {
                  error: 'El archivo excede el tamaño permitido (2 MB)'
                })
              })
            });
          }else{
            return Object.assign({}, state, {
              course: Object.assign({}, state.course, {
                [action.event.target.name]: action.event.target.files[0]
              })
            });  
          }
        }else{
          return Object.assign({}, state, {
            course: Object.assign({}, state.course, {
              [action.event.target.name]: action.event.target.files[0]
            })
          });
        }
      } 
    }else{
      if (
        action.event.target.name === "begin_date" ||
        action.event.target.name === "end_date"
      ){
        return Object.assign({}, state, {
          course: Object.assign({}, state.course, {
            [action.event.target.name]: addDay(action.event.target.value)
          })
        });
      }else{
        return Object.assign({}, state, {
          course: Object.assign({}, state.course, {
            [action.event.target.name]: action.event.target.value
          })
        });
      }
    }

    case coursesActions.CANCEL_NEW_COURSE:
    return Object.assign({}, state, {
      course: {},
      view: 'list'
    })

    case coursesActions.COURSE_FILE_FOUND: 
    return Object.assign({}, state, {
      course: Object.assign({}, state.course, {
        fileFound: action.resp
      })
    })

    case coursesActions.REQUEST_SAVE_COURSE_SUCCEDED:
    return Object.assign({}, state, {
      isFetching:false,
      course: action.course,
      courses: [...state.courses, action.course], 
      view: 'courseDetails'
    })

    case coursesActions.REQUEST_SAVE_COURSE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.NEW_COURSE:
    return Object.assign({}, state, {
      course: Object.assign({}, state.course, {
        name: '',
        description: '',
        price: 0,
        offer_price: 0,
        user_id: '',
        link_media: '',
        provider_id: '',
        document_description: '',
        image: '',
        category_id: '',
        modality_id: '',
        begin_date: dateParse(new Date()),
        end_date: dateParse(new Date()),
        duration: 0,
        priceWay: "isPaid",
        dateWay: "with_date",
        is_important: '2'
      }),
      view: 'newCourse'
    })

    case coursesActions.REQUEST_DELETE_COURSE_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      course: {},
      courses: state.courses.map((course) => {
        if(parseInt(course.id, 10) === parseInt(action.course.id, 10)){
          return Object.assign({}, course, {
            status: '2',
            statusAsString: 'Inactivo'   
          })
        }
        return course
      }),
      view: 'list'
    })

    case coursesActions.REQUEST_DELETE_COURSE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.REQUEST_REACTIVATE_COURSE_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      course: Object.assign({}, state.course, {
        status: '1',
        statusAsString: 'Publicado'
      }),
      courses: state.courses.map((course) => {
        if(parseInt(course.id, 10) === parseInt(action.course_id, 10)){
          return Object.assign({}, course, {
            status: '1',
            statusAsString: 'Publicado'   
          })
        }
        return course
      }),
      view: 'list'
    })

    case coursesActions.REQUEST_REACTIVATE_COURSE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.REQUEST_UPLOAD_COURSE_IMAGE_SUCCEDED: 
    return Object.assign({}, state, {
      isFetching: false, 
      course: Object.assign({}, action.course,{
        original: Object.assign({}, action.course, {
          image: action.image
        }),
        image: action.image 
      }),
      courses: state.courses.map((course) => {
        if(parseInt(course.id, 10) === parseInt(action.course.id, 10)){
          return Object.assign({}, course, {
            original: Object.assign({}, action.course, {
              image: action.image
            }),
            image: action.image 
          })
        }
        return course
      })
    })

    case coursesActions.REQUEST_UPLOAD_COURSE_IMAGE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.REQUEST_GET_COURSES_BY_CATEGORIES_SUCCEDED:
    return Object.assign({}, state, {
      coursesByCategories: action.courses,
      isFetching: false
    })

    case coursesActions.REQUEST_GET_COURSES_BY_CATEGORIES_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.HANDLE_COURSE_FILTER_CHANGE:
    return Object.assign({}, state, {
      filters: Object.assign({}, state.filters, {
        [action.event.target.name]: action.event.target.value
      })
    })

    case coursesActions.REMOVE_FILTERS:
    return Object.assign({}, state, {
      filters: Object.assign({}, state.filters, {
        category_id: null,
        modality_id: null,
        name: null
      })
    })

    case coursesActions.REQUEST_MARK_COURSE_AS_POPULAR_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      courses: state.courses.map((course) => {
        if(parseInt(course.id, 10) === parseInt(action.course.id)){
          return Object.assign({}, course, {
            is_important: 1
          })
        }
        return course;
      })
    })

    case coursesActions.REQUEST_MARK_COURSE_AS_POPULAR_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case coursesActions.REQUEST_DISMARK_COURSE_AS_POPULAR_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      courses: state.courses.map((course) => {
        if(parseInt(course.id, 10) === parseInt(action.course.id)){
          return Object.assign({}, course, {
            is_important: 2
          })
        }
        return course;
      })
    })

    case coursesActions.REQUEST_DISMARK_COURSE_AS_POPULAR_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    default:
      return state
  }
}

export default coursesReducer