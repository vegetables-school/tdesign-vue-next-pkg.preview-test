/* eslint-disable no-template-curly-in-string */
// 俄语-俄罗斯 Russian
import 'dayjs/locale/ru';

export default {
  autoComplete: {
    empty: 'Нет данных',
  },
  pagination: {
    itemsPerPage: '{size} шт./стр.',
    jumpTo: 'Перейти к',
    page: 'стр.',
    total: 'Всего {total} элементов данных',
  },
  cascader: {
    empty: 'Нет данных',
    loadingText: 'Загрузка',
    placeholder: 'Выберите',
  },
  calendar: {
    yearSelection: '{year} год',
    monthSelection: '{month} месяц',
    yearRadio: 'Год',
    monthRadio: 'Месяц',
    hideWeekend: 'Скрыть выходные',
    showWeekend: 'Показать выходные',
    today: 'Сегодня',
    thisMonth: 'Этот месяц',
    week: 'Пн,Вт,Ср,Чт,Пт,Сб,Вс',
    cellMonth:
      '1 мес.,2 мес.,3 мес.,4 мес.,5 мес.,6 мес.,7 мес.,8 мес.,9 мес.,10 мес.,11 мес.,12 мес.',
  },
  transfer: {
    title: '{checked} / {total} шт.',
    empty: 'Нет данных',
    placeholder: 'Введите ключевое слово для поиска',
  },
  timePicker: {
    dayjsLocale: 'zh-cn',
    now: 'Сейчас',
    confirm: 'Ок',
    anteMeridiem: 'До полудня',
    postMeridiem: 'После полудня',
    placeholder: 'Выберите время',
  },
  dialog: {
    confirm: 'Подтвердить',
    cancel: 'Отмена',
  },
  drawer: {
    confirm: 'Подтвердить',
    cancel: 'Отмена',
  },
  popconfirm: {
    confirm: {
      content: 'Подтвердить',
    },
    cancel: {
      content: 'Отмена',
    },
  },
  table: {
    empty: 'Нет данных',
    loadingText: 'Загрузка, пожалуйста, подождите',
    loadingMoreText: 'Нажмите, чтобы загрузить больше',
    filterInputPlaceholder: 'Введите содержание (нет значения по умолчанию)',
    sortAscendingOperationText: 'Сортировать по возрастанию',
    sortCancelOperationText: 'Отменить сортировку',
    sortDescendingOperationText: 'Сортировать по убыванию',
    clearFilterResultButtonText: 'Очистить фильтр',
    columnConfigButtonText: 'Настройка столбцов',
    columnConfigTitleText: 'Настройка столбцов таблицы',
    columnConfigDescriptionText:
      'Пожалуйста, выберите столбцы данных, которые нужно отобразить в таблице',
    confirmText: 'Подтвердить',
    cancelText: 'Отмена',
    resetText: 'Сбросить',
    selectAllText: 'Выбрать все',
    searchResultText: 'Поиск «{result}», найдено {count} результатов',
  },
  select: {
    empty: 'Нет данных',
    loadingText: 'Загрузка',
    placeholder: 'Выберите',
  },
  tree: {
    empty: 'Нет данных',
  },
  treeSelect: {
    empty: 'Нет данных',
    loadingText: 'Загрузка',
    placeholder: 'Выберите',
  },
  datePicker: {
    dayjsLocale: 'ru',
    placeholder: {
      date: 'Выберите дату',
      month: 'Выберите месяц',
      year: 'Выберите год',
      quarter: 'Пожалуйста выберите квартал',
      week: 'Пожалуйста выберите неделю',
    },
    weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    quarters: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал'],
    rangeSeparator: '-',
    direction: 'ltr',
    format: 'DD.MM.YYYY',
    dayAriaLabel: 'День',
    weekAbbreviation: 'Неделя',
    yearAriaLabel: 'Год',
    monthAriaLabel: 'Месяц',
    confirm: 'Подтвердить',
    selectTime: 'Выберите время',
    selectDate: 'Выберите дату',
    nextYear: 'Следующий год',
    preYear: 'Предыдущий год',
    nextMonth: 'Следующий месяц',
    preMonth: 'Предыдущий месяц',
    preDecade: 'Предыдущее десятилетие',
    nextDecade: 'Следующее десятилетие',
    now: 'Сейчас',
  },
  upload: {
    sizeLimitMessage: 'Размер файла не должен превышать {sizeLimit}',
    cancelUploadText: 'Отменить загрузку',
    triggerUploadText: {
      fileInput: 'Выбрать файл',
      image: 'Нажмите, чтобы загрузить изображение',
      normal: 'Нажмите, чтобы загрузить',
      reupload: 'Выбрать заново',
      continueUpload: 'Продолжить выбор',
      delete: 'Удалить',
      uploading: 'Загрузка',
    },
    dragger: {
      dragDropText: 'Отпустите мышь',
      draggingText: 'Перетащите в эту область',
      clickAndDragText:
        'Нажмите на кнопку «Выбрать файл» выше или перетащите файл в эту область',
    },
    file: {
      fileNameText: 'Имя файла',
      fileSizeText: 'Размер файла',
      fileStatusText: 'Статус',
      fileOperationText: 'Операция',
      fileOperationDateText: 'Дата загрузки',
    },
    progress: {
      uploadingText: 'Загрузка',
      waitingText: 'Ожидание загрузки',
      failText: 'Загрузка не удалась',
      successText: 'Загрузка успешна',
    },
  },
  form: {
    errorMessage: {
      date: 'Введите правильный ${name}',
      url: 'Введите правильный ${name}',
      whitespace: '${name} не может быть пустым',
      required: '${name} обязательно для заполнения',
      max: 'Длина символов ${name} не должна превышать ${validate} символов',
      min: 'Длина символов ${name} не должна быть меньше ${validate} символов',
      len: 'Длина символов ${name} должна быть ${validate}',
      enum: '${name} может быть только ${validate} и т.д.',
      idcard: 'Введите правильный ${name}',
      telnumber: 'Введите правильный ${name}',
      pattern: 'Введите правильный ${name}',
      validator: '${name} не соответствует требованиям',
      boolean: 'Тип данных ${name} должен быть булевым',
      number: '${name} должно быть числом',
    },
    colonText: ':',
  },
  input: {
    placeholder: 'Введите',
  },
  list: {
    loadingText: 'Загрузка, пожалуйста, подождите',
    loadingMoreText: 'Нажмите, чтобы загрузить больше',
  },
  alert: {
    expandText: 'Развернуть больше',
    collapseText: 'Свернуть',
  },
  anchor: {
    copySuccessText: 'Ссылка скопирована успешно',
    copyText: 'Скопировать ссылку',
  },
  colorPicker: {
    swatchColorTitle: 'Системные предустановленные цвета',
    recentColorTitle: 'Недавно использованные цвета',
    clearConfirmText:
      'Вы уверены, что хотите очистить недавно использованные цвета?',
    singleColor: 'Сплошной',
    gradientColor: 'Градиент'
  },
  guide: {
    finishButtonProps: {
      content: 'Готово',
      theme: 'primary',
    },
    nextButtonProps: {
      content: 'Следующий шаг',
      theme: 'primary',
    },
    skipButtonProps: {
      content: 'Пропустить',
      theme: 'default',
    },
    prevButtonProps: {
      content: 'Предыдущий шаг',
      theme: 'default',
    },
  },
  image: {
    errorText: 'Изображение не может быть отображено',
    loadingText: 'Загрузка изображения',
  },
  imageViewer: {
    errorText: 'Не удалось загрузить изображение, попробуйте перезагрузить',
    mirrorTipText: 'Зеркало',
    rotateTipText: 'Поворот',
    originalSizeTipText: 'Оригинальный размер',
  },
  typography: {
    expandText: 'раскрывать',
    collapseText: 'убрать',
    copiedText: 'Скопировано успешно',
  },
  rate: {
    rateText: [
      'Ужасно',
      'Разочарован',
      'Обычный',
      'Удовлетворенный',
      'Удивленный',
    ],
  },
  empty: {
    titleText: {
      maintenance: 'Строительство',
      success: 'Успех',
      fail: 'Провал',
      empty: 'Нет данных',
      networkError: 'Ошибка сети',
    },
  },
  descriptions: {
    colonText: ':',
  },
  chat: {
    placeholder: 'Введите сообщение...',
    stopBtnText: 'Остановить',
    refreshTipText: 'Сгенерировать заново',
    copyTipText: 'Копировать',
    likeTipText: 'Нравится',
    dislikeTipText: 'Не нравится',
    copyCodeBtnText: 'Копировать код',
    copyCodeSuccessText: 'Скопировано',
    clearHistoryBtnText: 'Очистить историю',
    copyTextSuccess: 'Успешно скопировано в буфер обмена',
    copyTextFail: 'Не удалось скопировать в буфер обмена',
    confirmClearHistory: 'Вы уверены, что хотите очистить все сообщения?',
    loadingText: 'Думаю...',
    loadingEndText: 'Глубоко обдумано',
  }
} as const;
