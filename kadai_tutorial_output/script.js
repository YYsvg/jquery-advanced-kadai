$(function() {
    // ボタンアニメーション
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        },100);
        });
        $('.button-more').on('mouseout',function(){
            $(this).animate({
                opacity: 1.0,
                marginLeft: 0
            }, 100);
    });

    // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    // AjaxでSTATIC FORMSにデータを送信
    $('#submit').on('click', function(event){
        // formタグによる送信を拒否
        event.preventDefault();

        // 入力チェックをした結果、エラーがあるかないか判定
        let result = inputCheck();

        // エラー判定とメッセージを取得
        let error = result.error;
        let message = result.message;

        // エラーがなかったらフォームを送信する
        if (error == false) {
            // Ajaxでformを送信する
        } else {
            // エラーメッセージを表示する
            alert(message);
        }
    });

    // フォーカスが外れた時(blur)にフォームの入力チェックをする
    $('#name').blur(function(){
        inputCheck();
    });
    $('#furigana').blur(function(){
        inputCheck();
    });
    $('#email').blur(function(){
        inputCheck();
    });
    $('#tel').blur(function(){
        inputCheck();
    });
    $('#message').blur(function(){
        inputCheck();
    });
    $('#agree').blur(function(){
        inputCheck();
    });

    // お問い合わせフォームの入力チェック
    function inputCheck() {
        let result;
        let message;
        let error;

        // お名前〜必須入力有無のチェック
        if($('#name').val() == ''){
            $('#name').css('background-color','#f79999');
            error = true ;
            message += 'お名前を入力してください\n';
        } else {
            $('#name').css('background-color','#fafafa');
        }

        if($('#furigana').val() == ''){
            $('#furigana').css('background-color','#f79999');
            error = true ;
            message += 'フリガナを入力してください\n';
        } else {
            $('#furigana').css('background-color','#fafafa');
        }
        if($('#message').val() == ''){
            $('#message').css('background-color','#f79999');
            error = true ;
            message += 'お問い合わせ内容を入力してください\n';
        } else {
            $('#message').css('background-color','#fafafa');
        }

        // メールアドレスのチェック
        if($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
            $('#email').css('background-color','#f79999');
            error = true ;
            message += 'メールアドレスが未記入、または「＠」「.」が含まれていません。\n';
        } else {
            $('#email').css('background-color','#fafafa');
        }

        // 電話番号のチェック（未入力の場合はー無しでもOK)
        if($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
            $('#tel').css('background-color','#f79999');
            error = true ;
            message += '電話番号に「ー」が含まれていません。\n';
        } else {
            $('#tel').css('background-color','#fafafa');
        }

        // 個人情報のチェックボックスのチェック
        if ($('#agree').prop('checked') == false){
            error =true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';     
        };

        // エラーの有無で送信ボタンを切り替え
        if(error == true) {
            $('#submit').attr('src','images/button-submit.png')
        } else {
            $('#submit').attr('src','images/button-submit-blue.png')
        };

        // オブジェクトでエラー判定とメッセージを返す
        result = {
            error: error,
            message: message
        }

        // 戻り値としてエラーがあるかどうかを返す
        return result;
    };

});