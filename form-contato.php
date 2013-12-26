<?php
    $date = date("d/m/Y h:i");

    // ****** ATENÇÃO ********
    // ABAIXO ESTÁ A CONFIGURAÇÃO DO SEU FORMULÁRIO.
    // ****** ATENÇÃO ********

    //PEGA DADOS DOS CAMPOS DO FORMULARIO
   $nome = $_POST["nome"];
   $email = $_POST["email"];
   $telefone = $_POST["telefone"];
   $assunto = $_POST["assunto"];
   $textodamensagem = $_POST["textodamensagem"];
   
   //CABEÇALHO - ONFIGURAÇÕES SOBRE SEUS DADOS E SEU WEBSITE
    $nome_do_site="Ponto Card";
    $email_para_onde_vai_a_mensagem = "comercial@pontocardce.com.br";
    $nome_de_quem_recebe_a_mensagem = "Ponto Card";
    $exibir_apos_enviar='resposta-automatica.html';

    //MAIS - CONFIGURAÇOES DA MENSAGEM ORIGINAL
    $cabecalho_da_mensagem_original="From: $nome <$email>\n";
    $assunto_da_mensagem_original="Contato do Site";

    // FORMA COMO RECEBERÁ O E-MAIL (FORMULÁRIO)
    // ******** OBS: SE FOR ADICIONAR NOVOS CAMPOS, ADICIONE OS CAMPOS NA VARIÁVEL ABAIXO *************
    $configuracao_da_mensagem_original = "ENVIADO POR: $nome\n";
    $configuracao_da_mensagem_original .= "Nome: $nome\n";   
    $configuracao_da_mensagem_original .= "Email: $email\n";
	$configuracao_da_mensagem_original .= "Telefone: $telefone\n";
	$configuracao_da_mensagem_original .= "Assunto: $assunto\n";
    $configuracao_da_mensagem_original .= "Mensagem: $textodamensagem\n";
    $configuracao_da_mensagem_original .= "ENVIADO EM: $date";

    //CONFIGURAÇÕES DA MENSAGEM DE RESPOSTA
    // CASO $assunto_digitado_pelo_usuario="s" ESSA VARIAVEL RECEBERA AUTOMATICAMENTE A CONFIGURACAO
    // "Re: $assunto"
    $assunto_da_mensagem_de_resposta = "Confirmação";
    $cabecalho_da_mensagem_de_resposta = "From: $nome_do_site <$email_para_onde_vai_a_mensagem>\n";
    $configuracao_da_mensagem_de_resposta="Obrigado por entrar em contato conosco!\nEstaremos lhe atendendo o mais breve possível.\nAtenciosamente...\nPonto Card\n(85) 3226-2933\nwww.pontocardce.com.br\n\nEnviado em: $date";

    // ****** IMPORTANTE ********
    // A PARTIR DE AGORA RECOMENDA-SE QUE NÃO ALTERE O SCRIPT PARA QUE O SISTEMA FINCIONE CORRETAMENTE
    // ****** IMPORTANTE ********

    //ESSA VARIAVEL DEFINE SE É O USUARIO QUEM DIGITA O ASSUNTO OU SE DEVE ASSUMIR O ASSUNTO DEFINIDO
    //POR VOCÊ CASO O USUARIO DEFINA O ASSUNTO PONHA "s" NO LUGAR DE "n" E CRIE O CAMPO DE NOME
    //'assunto' NO FORMULARIO DE ENVIO
    $assunto_digitado_pelo_usuario="s";

    //ENVIO DA MENSAGEM ORIGINAL
    $headers = "$cabecalho_da_mensagem_original";
    if ($assunto_digitado_pelo_usuario=="n")
    {
    $assunto = "$assunto_da_mensagem_original";
    }
    mail($email_para_onde_vai_a_mensagem,$assunto,$configuracao_da_mensagem_original,$headers);

    //ENVIO DE MENSAGEM DE RESPOSTA AUTOMATICA
    $headers = "$cabecalho_da_mensagem_de_resposta";
    if ($assunto_digitado_pelo_usuario=="n")
    {
    $assunto = "$assunto_da_mensagem_de_resposta";
    }
    else
    {
    $assunto = "Re: $assunto";
    }
    mail($email,$assunto,$configuracao_da_mensagem_de_resposta,$headers);

    echo "<script>window.location='$exibir_apos_enviar'</script>";

    ?>