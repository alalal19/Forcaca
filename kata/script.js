var colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#f1c40f','#e67e22','#e74c3c','#f39c12','#c0392b','#34495e'];
var messages = ["Your laugh made my day).",
"You're so incredibly kind-hearted and caring towards others.",
"You inspire me to be more creative every day.",
"You motivate me to be a better person.",
"You've helped me rekindle my enjoyment of reading",
"You've helped me so much to be more confident in myself.",
"Every day with you is a grace that I never want to end.",
"You make everything so much fun",
"You're such an incredibly talented listener",
"You're so open talk about anything with enthusiasm and an open mind.",
"You never talk poorly of others when most people might.",
"You have an infectious passion for life that makes me want to constantly experience new things.",
"You find excitement and enjoyment in the little things, not just the big things.",
"You make me laugh so hard sometimes my stomach hurts.",
"You're beautiful!",,
"You're amazing person",
"You're willing to put up with my silly obsessions.",
"You introduce me to amazing new foods. SO MANY CREPES!!",
"You find enjoyment in seeing the enjoyment of others.",
"You're quick to put others before yourself.",
"You're so eager and willing to share.",
"You're so goddamn SEXY.",
"You take the time to really listen.",
"You love matacha (Just as much as I do.)",
"You find so many cool movies to watch !!",
"You make me want to work harder",
"You find so many fun and unique things to talk that I'd never think of on my own.",
"No, seriously. You're so beautiful.",
"Every time my phone vibrates I get excited that it might be from you.",
"Every day when i woke up, the first thing that i want to hear is your voice",
"You somehow always know just what to say and when to say it.",
"You read to me in your amazing reading voice.",
"Please just trust me you're really beautiful.",
"You have such an amazing sense of what's write and what's wrong.",
"You are 100% genuine.",
"You have an incredible drive to get what you want in life.",
"You accept me, flaws and all. even though there are so many of them!!",
"You aren't afraid to take risks.",
"'What?'",
"You make me try things I never thought I'd try.",
"You're so easy to be comfortable around.",
"Your excitement in the mornings fills me with energy to take on the day.",
"Your smile.",
"Your laugh.",
"The incredible look of dissapointment you give me.",
"Your little tremors when you got your first bouquet of flower ",
"I never knew I could enjoy coding if it's not for you",
"We both enjoy action and bloody movies.",
"Going into new experiences without knowing what to expect, just knowing I'm glad that I'm sharing them with you.",
"We already act like an old married couple.",
"Even after a short time I felt like I had known you for years.",
"The way your voice change when you shy.",
"You aren't afraid to be yourself.",
"Your willingness to spend time and energy on my hobbies and interests.",
"You suprise me when I least expect it!",
"Your family is awesome!",
"You give me compliments when I need them the most.",
"You were the first person to ever say I was kind-hearted.",
"You're really love taylor swift",
"You can fall alseep when i reciting a story ",
"Planning trips with you makes me feel like a kid on Christmas morning!",
"You come up with so many fun and memorable date ideas!",
"You are willing to indulge my nerdy Star Trek fantasies :)",
"We meticulously lay out the table every time we eat dinner together.",
"You constantly amaze me.",
"You leave me speechless even when there's so much I want to say.",
"You enjoy being sappy, and i love it.",
"You've taught me so much about it's okey to be difference ",
"You're an endless well of new ideas.",
"You're extraordinarily wise and give great advice.",
"You have well reasoned and carefully thought out ideas.",
"You don't worry about the future.",
"You have an amazing fashion sense.",
"You're even more beautiful on the inside than you are on the outside.",
"You make a real and positive difference in other peoples' lives.",
"You bring out the best in those around you.",
"You look incredible whether you're in fancy dinner clothes or around the house in pajamas.",
"You're a great example of what a person should strive to be like.",
"Your morning voice is one of the cutest things I've ever heard.",
"You give me gifts for no reason.",
"When I'm with you I just wish I could take my finger and stop the clock hand from moving forward.",
"No matter how long we spend with eachother I miss you the moment we end call.",
"I've never thought more often throughout the day about a person than I think about you.",
"After a long, fun filled day we can lay down, put our arms around eachother and let out a long sigh.",
"I want you to be around all the time.",
"You can dish it out just as well as you can take it.",
"You make the greatest puns at the most random times.",
"This picture of you.",
"You make me feel loved",
"You always laugh at my jokes",
"If I know what love is, it's because of you",
"I love you not because of who you are, but because of who I am when I'm with you",
"You make me afraid of losing you",
"You make me appreciate time",
"You taught me, never love someone who treats you like an ordinary person ",
"Distance is not an excuse",
"Your random things",
"Your maturity",
"You have replaced my nightmares with beautiful dreams, my worries with happiness, and my fears with love",
"With you, my heart has found its rhythm.",
"I wanted to spend time with you so much that I secretly didn't finish all 180 of these with the secret plan to add the rest a different day!"];

function changeBackgroundColor(){
  var color = colors[Math.floor(Math.random()*colors.length)];
  console.log(color);
  $('.main').css('background-color',color);
}

$(document).ready(function(){
  changeBackgroundColor();
  $('#message').text(messages[Math.ceil(Math.random()*messages.length)]);
    window.setTimeout(function(){
    $('#premessage').fadeIn(2000).removeClass('hidden');
  },1000);
  window.setTimeout(function(){
    $('#message').fadeIn(2000).removeClass('hidden');
  },2000);
  window.setTimeout(function(){
    $('#next_message').fadeIn(2000).removeClass('hidden');
  },2000);
});

$('#next_message').click(function(){
  $('#next_message').fadeOut('fast');
  changeBackgroundColor();
  $.when($('#message').fadeOut(2000)).done(function(){
    $('#message').text(messages[Math.ceil(Math.random()*messages.length)]);
    $('#message').fadeIn(2000);
    window.setTimeout(function(){
      $('#next_message').fadeIn(2000);
    },2000);
  });
});