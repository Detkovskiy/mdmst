var inSPB1=0,distKM1=0,inSPB2=0,distKM2=0,fonttype="Simple",selectedfontfamily="Simple1",selectedfontdescription="простой",color_val="",zaglav_count=0,propis_count=0,price=0;function calc(){var t=$(".calc_letters_step1_menu_button_checked").data("option"),e=$("#calc_letters_step2_text_input").val(),l=/[A-ZА-Я]/,c=/[^\s]/;for(u=propis_count=zaglav_count=0;u<e.length;u++){var a=e.charAt(u);l.test(a)?zaglav_count++:c.test(a)&&propis_count++}var n=zaglav_count+propis_count/1.2,i=1;"Serif"===fonttype?i=1.2:"Complex"===fonttype&&(i=1.5);var _=0,o=0;1===t?(_=1,o=0):2===t?(1,_=1.35,o=0):3===t?(0,o=_=1):4===t&&(_=1.35,o=1);var s=parseInt($("#calc_letters_step3_height_input").val());if(0!=n&&15!=s&&0!=_){if(dollar_compensation=(35/33-1)/3+1,vis=n*s,0==o)var r=[200,100,50,30,20,15];else{var r=[240,120,80,70,60,55]}for(var p,d=[15,25,100,300,1e3,5e4],u=0;vis>=d[u];u++)zen_print_v=(vis-d[u])*(r[u+1]-r[u])/(d[u+1]-d[u])+r[u],p=10*Math.ceil(vis*zen_print_v*i*_/10)*dollar_compensation,Math.ceil(10*p/n)/10;price=Math.ceil(p),$("#calc_letters_itogo_summ").html(Math.ceil(p)+" руб.");var m=n*s,f=Math.ceil(m/300);f=Math.ceil(m/200);priceInstall=2e3*f+1500,window.inSPB1?priceInstall+=25*window.distKM1:priceInstall+=60*window.distKM1}}$(document).ready(function(){$("#calc_letters").on("click",function(){calc()}),$("#calc_letters_step2_width_input").on("keyup",function(){calc()}),$("#calc_letters_step2_height_input").on("keyup",function(){calc()}),$("#calc_letters_step1_menu .calc_letters_button").on("click",function(){$("#calc_letters_step1_menu .calc_letters_step1_menu_button_checked").toggleClass("calc_letters_step1_menu_button_checked"),$(this).toggleClass("calc_letters_step1_menu_button_checked"),$("#calc_letters_step1_demo .calc_letters_step1_demo_showing").toggleClass("calc_letters_step1_demo_showing"),$("#calc_letters_step1_demo li[data-option="+$(this).data("option")+"]").toggleClass("calc_letters_step1_demo_showing")}),$("#calc_letters_step5_color_select_btn").on("click",function(){$(this).css("display","none"),$("#calc_letters_step5_color_select_wrapper").css("display","block")}),$("#calc_letters_step5_color_select_ok").on("click",function(){$("#calc_letters_step5_color_select_btn").css("display","block"),$("#calc_letters_step5_color_select_wrapper").css("display","none")}),$("#calc_letters_step6_radio button").on("click",function(){$("#calc_letters_step6_radio .calc_letters_step6_radio_selected").toggleClass("calc_letters_step6_radio_selected"),$(this).toggleClass("calc_letters_step6_radio_selected")}),$(".calc_numinput_btn_plus").click(function(t){t.preventDefault(),fieldName=$(this).attr("field");var e=parseInt($("input[name="+fieldName+"]").val());isNaN(e)?$("input[name="+fieldName+"]").val(0):$("input[name="+fieldName+"]").val(e+1)}),$(".calc_numinput_btn_minus").click(function(t){t.preventDefault(),fieldName=$(this).attr("field");var e=parseInt($("input[name="+fieldName+"]").val());!isNaN(e)&&0<e?$("input[name="+fieldName+"]").val(e-1):$("input[name="+fieldName+"]").val(0)});var t={id:0,add:function(t,e,l,c){this.id=this.id+1,$("#calc_letters_step4_fontlist .nano-content").append('<div class="font_select_wrapper'+(c?" active":"")+'" data-id="'+this.id+'"><div class="font_select_wrapper_example" data-type='+t+' style="font-family:'+e+'">'+$("#calc_letters_step2_text_input").val()+'</div><div class="font_select_wrapper_line"></div><div class="font_select_wrapper_description">'+l+"</div></div>");var a=$("#calc_letters_step4_fontlist .nano-content").children(".font_select_wrapper[data-id="+this.id+"]"),n=this.id;a.on("click",function(){fonttype=t,selectedfontfamily=e,selectedfontdescription=l,this_id=n,$("#calc_letters_step4_fontlist .nano-content").children(".active").removeClass("active"),$("#calc_letters_step4_fontlist .nano-content").children(".font_select_wrapper[data-id="+this_id+"]").addClass("active"),$("#calc_letters_demo_label").css("font-family",selectedfontfamily)})}};t.add("Simple","Simple1","простой",1),t.add("Simple","Simple2","популярный простой",0),t.add("Simple","Simple3","необычный простой",0),t.add("Simple","Simple4","простой",0),t.add("Simple","Simple5","простой",0),t.add("Simple","Simple7","простой",0),t.add("Simple","Simple8","простой",0),t.add("Serif","Serif1","с засечками",0),t.add("Serif","Serif2","с засечками",0),t.add("Serif","Serif3","с засечками",0),t.add("Serif","Serif4","с засечками",0),$("#calc_letters_step4_fontlist .nano-content > div").on("click",function(){}),$("#calc_letters_step2_text_input").on("keyup",function(){$("#calc_letters_demo_label").text($("#calc_letters_step2_text_input").val()),$("#calc_letters_step4_fontlist .nano-content > div").children(".font_select_wrapper_example").text($("#calc_letters_step2_text_input").val()),calc()}),$("#calc_letters").on("click",function(){calc()}),$("#calc_letters_step3_height_input").on("change",function(){calc()}),$.colorpicker.regional.ru={ok:"OK",cancel:"Отменить",none:"Никакой",button:"Цвет",title:"Выбрать цвет",transparent:"Прозрачный",hsvH:"H",hsvS:"S",hsvV:"V",rgbR:"R",rgbG:"G",rgbB:"B",labL:"L",labA:"a",labB:"b",hslH:"H",hslS:"S",hslL:"L",cmykC:"C",cmykM:"M",cmykY:"Y",cmykK:"K",alphaA:"A"},$("#calc_letters_step5_color_select").colorpicker({select:function(t,e){color_val="#"+e.formatted,$("#calc_letters_step5_color_value").attr("value",e.formatted),$("#calc_letters_step5_color_demo").css("background-color","#"+e.formatted),$("#calc_letters_demo_label").css("color","#"+e.formatted)},parts:["map","bar"],layout:{map:[0,0,1,1],bar:[1,0,1,1]},part:{map:{size:128},bar:{size:128}}}),$(".nano").nanoScroller({scroll:"top",alwaysVisible:!0});$("[title]").tooltip({track:!0});var e=["Плоские","Плоские световые","Объёмные","объёмные световые"],l=["Эконом","Стандарт","Элит"];$("#calc_letters_continue_mail_send").on("click",function(){var t=$("#calc_letters_continue_mail_input").val();/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(t)?$.ajax({url:"/ajax/sendmail/lettersres_mail",type:"POST",data:{email:$("#calc_letters_continue_mail_input").val(),label:$("#calc_letters_step2_text_input").val(),num_capital:zaglav_count,num_propis:propis_count,num_total:zaglav_count+propis_count,height:parseInt($("#calc_letters_step3_height_input").val()),type:e[$(".calc_letters_step1_menu_button_checked").data("option")-1],font:selectedfontfamily,fonttype:selectedfontdescription,color:color_val,materials:l[$(".calc_letters_step6_radio_selected").data("option")-1],montazh_addr:$("#calc_letters_montazh_destination_input").val(),montazh_price:Math.ceil(priceInstall),full_price:price+Math.ceil(priceInstall),price:price},cache:!1,dataType:"text",success:function(t){"OK"===t?(alert("Сообщение отправлено!"),yaCounter30901531.reachGoal("calc_letters_mail")):"TERR"===t&&alert("Техническая ошибка при отправке сообщения. Попробуйте позже или позвоните нам по телефону")}}):($("#calc_letters_continue_mail_input").tooltip("option",{position:{my:"center center-40px",at:"center"},show:{effect:"blind",duration:1e3},tooltipClass:"calc_tooltip_invalid_email",track:!1,content:"Неверный e-mail"}),$("#calc_letters_continue_mail_input").tooltip("open"),$("#calc_letters_continue_mail_input").on("tooltipopen",function(t,e){$("#calc_letters_continue_mail_input").tooltip("option",{disabled:!0})}))}),$("#calc_letters_continue_tel_send").on("click",function(){var t=$("#calc_letters_continue_tel_input").val();/^[0-9()\-+ ]{5,20}$/.test(t)?$.ajax({url:"/ajax/sendmail/lettersres_tel",type:"POST",data:{tel:t,label:$("#calc_letters_step2_text_input").val(),num_capital:zaglav_count,num_propis:propis_count,num_total:zaglav_count+propis_count,height:parseInt($("#calc_letters_step3_height_input").val()),type:e[$(".calc_letters_step1_menu_button_checked").data("option")-1],font:selectedfontfamily,fonttype:selectedfontdescription,color:color_val,materials:l[$(".calc_letters_step6_radio_selected").data("option")-1],montazh_addr:$("#calc_letters_montazh_destination_input").val(),montazh_price:Math.ceil(priceInstall),full_price:price+Math.ceil(priceInstall),price:price},cache:!1,dataType:"text",success:function(t){"OK"===t?(alert("Сообщение отправлено!"),yaCounter30901531.reachGoal("calc_letters_tel")):"TERR"===t&&alert("Техническая ошибка при отправке сообщения. Попробуйте позже или позвоните нам по телефону")}}):($("#calc_letters_continue_tel_input").tooltip("option",{position:{my:"center center-40px",at:"center"},show:{effect:"blind",duration:1e3},tooltipClass:"calc_tooltip_invalid_tel",track:!1,content:"Неверный телефон"}),$("#calc_letters_continue_tel_input").tooltip("open"),$("#calc_letters_continue_tel_input").on("tooltipopen",function(t,e){$("#calc_letters_continue_tel_input").tooltip("option",{disabled:!0})}))}),calc()});