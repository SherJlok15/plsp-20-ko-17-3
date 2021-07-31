const router = require('express').Router();
const Parts = require('../models/parts.model');

router.route('/').get((req, res) => {
  Parts.find()
    .then(parts => res.json(parts))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const partNumber = req.body.partNumber;
  const partName = req.body.partName;
  const lessons = req.body.lessons;

  const newPart = new Parts({
    partNumber,
    partName,
    lessons
  });

  newPart.save()
    .then((part) => {
      res.json(part._id)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sort').post((req, res) => {

  Parts.find()
    .then((parts) => {
      newParts = parts.map((item, index) => {
        Parts.findById(item._id)
          .then(part => {
            part.partNumber = index + 1;
            part.save()
              .then(() => console.log('saved'))
              .catch(err => res.status(400).json('Error: ' + err));
          })
          .catch(err => res.status(400).json('Error: ' + err));
      })
      res.json(newParts)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addnewlesson/:id/').post((req, res) => {

  if (req.params.id == 0) {
    Parts.find()
      .then(parts => {
        const partNumber =  parts.length + 1;
        const lessons = [req.body.newLesson];
        const newPart = new Parts({
          partNumber,
          partName: req.body.newPartTitle,
          lessons
        });
        newPart.save()
          .then((part) => {
            res.json(part._id)
          })
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err))
  } else {
    Parts.findById(req.params.id)
      .then(part => {
        part.lessons.push(req.body);
        part.save()
          .then(() => res.json('Lesson added'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  }

});

router.route('/:id').get((req, res) => {
  Parts.findById(req.params.id)
    .then(part => res.json(part))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  Parts.findByIdAndDelete(req.params.id)
    .then(() => res.json('Part deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/lesson/:id/:lessonindex').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lessonIndex = req.params.lessonindex
      const partLessons = part.lessons;
      const newLessons = partLessons.filter((item, index) => index != lessonIndex).map((les,index) => {
        les.lesson_number = index + 1;
        return les
      })

      part.lessons = newLessons;
      part.save()
        .then(() => res.json('lesson deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/test/:id/:lessonindex').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lessonIndex = req.params.lessonindex
      const partLessons = part.lessons;
      const newLessons = part.lessons.map((item, index) => {
        if (index == lessonIndex) {
          item.lesson_test = []
        }
        return item
      })
      part.lessons = newLessons;
      part.updateOne({lessons: newLessons})
        .then(() => res.json('test deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-test/:id/:lesNumb').post((req, res) => {

  Parts.findById(req.params.id)
    .then((part) => {
      const lessonNumb = req.params.lesNumb;
      const test = req.body;
      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lessonNumb) {
          item.lesson_test = test
        }
        return item
      })

      part.lessons = newLessons;

      part.updateOne({lessons: newLessons})
        .then(() => res.json('test added'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/check-test-result/:id/:lesNumb/:userName').get((req, res) => {

  Parts.findById(req.params.id)
    .then((part) => {
      const lessonNumber = req.params.lesNumb;
      const userName = req.params.userName;
      let userHasRating = false;
      part.lessons.map(item => {
        if (item.lesson_number == lessonNumber) {
          item.lesson_test_results.map(res => {
            if (res.user_name === userName) {
              userHasRating = true;
            }
          })
        }
      })
      res.json(userHasRating)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-test-result/:id/:lesNumb').post((req, res) => {

  Parts.findById(req.params.id)
    .then((part) => {
      const test = req.body;
      const lessonNumber = req.params.lesNumb
      let newLessons = part.lessons.map(item => {
        if (item.lesson_number == lessonNumber) {
          item.lesson_test_results.push(test)
        }
        return item
      });
      part.lessons = newLessons;
      part.updateOne({lessons: newLessons})
        .then(() => res.json('user test result added'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edited-module/:id/:lesNumb/:modNum').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const modNum = req.params.modNum;
      const modVal = req.body.module_value;

      const newLessons = part.lessons.map(item => {

        if (item.lesson_number == lesNum) {
          item.lesson_text = item.lesson_text.map(lm => {
            if (lm.module_number == modNum) {
              lm.module_value = modVal
            }
            return lm;
          })
        }
        return item;
      })

      part.updateOne({lessons: newLessons})
        .then(() => res.json('new module added'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete-module/:id/:lesNumb/:modNum').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const modNum = req.params.modNum;

      const newLessons = part.lessons.map(item => {

        if (item.lesson_number == lesNum) {
          item.lesson_text = item.lesson_text.map(lm => {
            if (lm.module_number == modNum) {
              return undefined
            } else {
              return lm;
            }
          }).filter(item => item !== undefined).map((item, index) => {
            item.module_number = index + 1
            return item
          })
        }
        return item;
      })

      part.updateOne({lessons: newLessons})
        .then(() => res.json('module deleted'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/move-module/:id/:lesNumb/:modNum/:modInd/:direction').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const modNum = req.params.modNum;
      const direction = req.params.direction;
      const modInd = req.params.modInd;

      const removedItem = part.lessons.filter(item => item.lesson_number == lesNum)[0].lesson_text.filter(item => item.module_number == modNum);
      const newIndex =
        direction === 'up' ?
          +modInd - 1 :
          direction === 'down' ?
            +modInd + 1 :
            ''
      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lesNum) {
          item.lesson_text = item.lesson_text.filter(lm => lm !== removedItem[0])
        }
        return item
      });

      newLessons.map(item => {
        if (item.lesson_number == lesNum) {
          item.lesson_text.splice(newIndex, 0, removedItem[0]);
          item.lesson_text.map((lm, index) => {
            lm.module_number = index + 1
            return lm
          })
        }
        return item
      })

      part.updateOne({lessons: newLessons})
        .then(() => res.json('module deleted'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-module/:id/:lesNumb').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const newModule = req.body

      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lesNum) {
          item.lesson_text.push(newModule)
        }
        return item
      });

      part.updateOne({lessons: newLessons})
        .then(() => res.json('module added'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add-new-lesson-title/:id/:lesNumb').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const newTitle= req.body.title;

      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lesNum) {
          item.lesson_title = newTitle
        }
        return item
      });

      part.updateOne({lessons: newLessons})
        .then(() => res.json('module added'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/retaking-clear-user-result/:id/:lesNumb/:userName').post((req, res) => {
  Parts.findById(req.params.id)
    .then((part) => {
      const lesNum = req.params.lesNumb;
      const userName = req.params.userName;

      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lesNum) {
          item.lesson_test_results = item.lesson_test_results.filter(item => item.user_name !== userName)
        }
        return item
      });

      part.updateOne({lessons: newLessons})
        .then(() => res.json('module added'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lesson-test-draft/:id/:lessonNumb/').get((req, res) => {
  Parts.findById(req.params.id)
    .then(part => {
      const lessonNumb = req.params.lessonNumb
      const lesson_test_draft = part.lessons.filter(item => item.lesson_number == lessonNumb)[0].lesson_test_draft;
      res.json(lesson_test_draft)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/lesson-test-draft-add-question/:id/:lessonNumb/').post((req, res) => {
  Parts.findById(req.params.id)
    .then(part => {
      const lessonNumb = req.params.lessonNumb
      const newQuestion = req.body;

      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lessonNumb) {
            item.lesson_test_draft.push(newQuestion)
        }
        return item
      });

      part.updateOne({lessons: newLessons})
        .then(() => res.json('question added to draft'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add-lesson-test-draft/:id/:lessonNumb/').post((req, res) => {
  Parts.findById(req.params.id)
    .then(part => {
      const lessonNumb = req.params.lessonNumb
      const draft = req.body;

      const newLessons = part.lessons.map(item => {
        if (item.lesson_number == lessonNumb) {
            item.lesson_test_draft = draft
        }
        return item
      });

      part.updateOne({lessons: newLessons})
        .then(() => res.json('question added to draft'))
        .catch(err => res.status(400).json('Error: ' + err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
