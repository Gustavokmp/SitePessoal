var app = angular.module('sitePessoal',['ngRoute']);

app.controller('mainController',function($scope){
  $scope.nome = 'Gustavo Maciel Pires';
  $scope.cargo = "Desenvolvedor de Software";
  $scope.foto = "imagens/gustavo-perfil.jpg";

  $scope.resumo = [
    'Graduando do 4º Período de Sistemas de Informação pela Unifacisa','Desenvolvedor das Linguagens Python,JavaScript,Java, Html5, CSS,angularJs.'
  ];
  $scope.experiencia = [
    'Monitor da disciplina de Programação 1 no Período 2016.2 .','Participante do projeto PPP( Projeto em preparação pra programação) voltado para maratonas de programação 2016'
  ];
  $scope.academico = [
    {
      data:' (2011 - 2015)',
      formacao: 'Ensino Médio e Técnico em Manutenção e suporte em informatica IFPB - Campus Monteiro'
    },
    {
      data:' (2015 - Presente)',
      formacao:'Superior pela Unifacisa - Sistemas de Informação'
    }
  ];
  $scope.ano = new Date().getFullYear();

  $scope.orcamentos = [];

  $scope.solicitacaoOrcamento = function(orcamento){
    $scope.orcamentos.push(orcamento);
    console.log($scope.orcamentos);
  }
});
