var generatorDOM = {
    createWrapper: function (header, main) {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.appendChild(header);
        wrapper.appendChild(main);
        return wrapper;
    },
    createHeader: function () {
        var header = document.createElement('header');
        var caption = document.createElement('p');
        caption.classList.add('list');
        header.appendChild(caption);
        caption.innerHTML = 'Programming test';
        return header;
    },
    createCheckBoxSet: function (countOfCheckBoxes) {
        var checkBoxSet = document.createElement('div');
        checkBoxSet.classList.add('checkBoxSet');
        for (var i = 0; i < countOfCheckBoxes; i++) {
            var checkBox = this.createCheckBox('Answer №' + (i + 1));
            checkBoxSet.appendChild(checkBox);
            checkBoxSet.appendChild(document.createElement('br'))
        }
        return checkBoxSet;
    },
    createCheckBox: function (text) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.value = text;
        label.appendChild(input);
        label.innerHTML += text;
        return label;
    },
    createQuestionsList: function (countQuestions, countAnswers) {
        var list = document.createElement('ol');
        for (var i = 0; i < countQuestions; i++) {
            var question = document.createElement('li');
            question.classList.add('questions');
            question.innerHTML = 'Question №' + (i + 1);
            question.appendChild(this.createCheckBoxSet(countAnswers));
            list.appendChild(question);
        }
        return list;
    },
    createButton : function () {
        var submit = document.createElement('input');
        submit.type = 'submit';
        submit.classList.add('btn');
        submit.classList.add('btn-info');
        submit.classList.add('check-result-button');
        submit.value = 'Check my results';
        return submit;
    },
    createMain: function () {
        var main = document.createElement('main');
        var form = document.createElement('form');
        form.action = '/';
        form.appendChild(this.createQuestionsList(3, 3));
        form.appendChild(this.createButton());
        main.appendChild(form);
        return main;
    },
    generateDOM: function () {
        var body = document.body;
        var wrapper = this.createWrapper(this.createHeader(), this.createMain());
        body.appendChild(wrapper);
    }
};

generatorDOM.generateDOM();