// BASE DE DONNÉES DES LIVRES GABONAIS
const romans = [
    { 
        title: "Malédiction", 
        author: "Sylvie Ntsame", 
        cat: "Drame"/"Mysticisme" , 
        img: "malédiction.png",
        date: "2005",
        description: "Le roman raconte l’histoire d’une famille frappée par une malédiction qui semble se transmettre de génération en génération. Tout commence par des événements étranges : maladies inexpliquées, morts soudaines, échecs répétés… Peu à peu, les personnages réalisent que ces malheurs ne sont pas le fruit du hasard..",
        ouLeTrouver: "  Librairies de Libreville/ Google Play Livres 9,99£ / Amazon 13,50£" 
    },
    { 
        title: "Sidonie", 
        author: "Chantal Magalie Mbazoo Kassa", 
        cat: "Drame", 
        img: "sidonie.png", 
        date: "2001",
        description: "Sidonie est une femme moderne, éduquée et pleine de vie. Mais son existence bascule lorsqu'elle est confrontée à la maladie. Entre la ville effervescente et le village ancré dans ses traditions, elle entame un voyage de résilience. Alors que sa famille préfère invoquer le sortilège ou la fatalité pour expliquer le mal qui ronge les corps, Sidonie décide de regarder la réalité en face.",
        ouLeTrouver: "Librairies de Libreville / Maison de la Presse" 
    },
    { 
        title: "Elonga", 
        author: "Angèle Rawiri", 
        cat: "Mysticisme", 
        img: "elonga.png",
        date: "1980",
        description:"Le roman suit le destin de Lulendo, un jeune métis né d'un père gabonais et d'une mère européenne. Après des années passées en Europe, il décide de revenir s'installer au Gabon. Empli d'idéaux, il espère retrouver sa terre d'origine et s'y intégrer. Mais très vite, le rêve se brise : il se retrouve étranger sur sa propre terre, pris en étau entre une éducation occidentale et une société africaine dont il ne maîtrise plus les codes secrets.",
        ouLeTrouver: "Librairies de Libreville / Institut Français / Amazon 7,99£" 
    },
    { 
        title: "Histoire d'un enfant trouvé", 
        author: "Robert Zotoumbat", 
        cat: "Drame", 
        img: "histoiretrouvé.png",
        date: "1971",
        description: "Un enfant abandonné grandit dans un environnement marqué par les inégalités et les traditions. Ce roman poignant explore la quête d'identité et les réalités sociales du Gabon, tout en mettant en lumière la résilience humaine face aux difficultés.",
        ouLeTrouver: "Maison de la Presse / Carrefour des Arts / Amazon 3,49£" 
    },
    { 
        title: "La mouche et la glu", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Mysticisme", 
        img: "lamoucheetlaglu.png",
        date: "1984",
        description: "Nyota a dix huit ans quand elle rencontre Amando, un jeune homme de famille modeste ayant raté son baccalauréat l’année dernière. Belle et bonne, Nyota rejette la décision de son père de la marier au riche et lubrique M’poyo. N’Gombi, père peu scrupuleux se venge et donne la chair de sa fille à manger aux sorciers, dont le nom signifie »l’étoile », dans la langue maternelle de l’auteur brillera toujours car elle n’a écouté que son coeur. Modèle, elle lutte contre le pouvoir de l’argent qui pervertit le riche et marginalise le pauvre..",
        ouLeTrouver: "Amazon 6.20£ / Librairies de Libreville / La Maison de la Presse/Cultura 6.80£" 
    },
    { 
        title: "Beauté Sombre ou Lolie l'ingénue", 
        author: "Antier Ondo", 
        cat: "Drame", 
        img: "baute.png",
        date: "2011",
        description: "Lolie est une jeune femme d'une beauté renversante, mais elle vit dans la précarité aux côtés de sa mère. Sa vie bascule le jour où elle croise le chemin d'un homme au charisme magnétique. Sous le charme, Lolie tombe éperdument amoureuse, pensant avoir trouvé celui qui l'arrachera à sa condition difficile. Pourtant, derrière ce sourire séducteur se cache un secret terrifiant et une soif de vengeance destructrice. Atteint du VIH et hanté par l'ignorance de l'origine de son mal, cet homme a pris une décision radicale : condamner toutes celles qui croiseront sa route. Lolie, l'ingénue, parviendra-t-elle à échapper à ce piège mortel ?",
        ouLeTrouver: "Librairie de Libreville / Amazon 6.20£ / GIPA 7100 FCFA" 
    },
    { 
        title: "Histoire d'AWU", 
        author: "Chantal Magalie Jenkins", 
        cat: "Société", 
        img: "Histoire.png",
        date: "2007",
        description: "Awu est une institutrice dévouée, une épouse exemplaire et une mère attentive. Elle vit à Awu-Essandone, un village où les traditions régissent chaque instant de la vie. À la mort de son mari, Obame Afane, la vie d'Awu bascule. Elle ne doit pas seulement gérer son deuil, mais aussi affronter les rituels rigides de la belle-famille, les humiliations liées au veuvage et les querelles d'héritage.Le roman pose une question centrale : comment rester soi-même quand la coutume exige que l'on s'efface ?.",
        ouLeTrouver: "Librairies de Libreville / Maison de la Presse 19975 FCFA / Amazon 15,25£ / Fnac 15,25£ /Cultura15,25£" 
    },
    { 
        title: "Mon amante,la femme de mon père", 
        author: "Sylvie Ntsame", 
        cat: "Drame" , 
        img: "mon amente.png",
        date: "17 octobre 2012",
        description: "Le récit nous plonge dans l'histoire de Julien, un jeune homme qui tombe sous le charme de la nouvelle épouse de son propre père. Ce qui commence comme une attirance interdite se transforme en une liaison dangereuse et clandestine. Entre le respect dû à la figure paternelle et la fougue d'une passion dévorante, Julien s'engage sur un chemin qui menace de faire voler en éclats les fondements de sa famille et de sa propre dignité.",
        ouLeTrouver: " Maison de la Presse 13500 FCFA /Amazon 18,00£" 
    },
    { 
        title: "Le pacte d'AFIA", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Tradition", 
        img: "lepacte.png",
        date: "24 juin 2022",
        description: "Le roman raconte l'histoire d'Afia, une jeune femme dont le destin est scellé dès sa naissance par un pacte mystérieux conclu par ses parents. Ce pacte est une promesse de mariage forcé destinée à sceller une alliance entre deux familles. Le récit suit le combat d'Afia pour reprendre le contrôle de sa vie et de son corps face à une tradition qui la considère comme une simple monnaie d'échange. C'est un voyage entre la soumission imposée et le désir d'émancipation, où l'héroïne doit affronter non seulement sa famille, mais aussi le poids invisible des ancêtres et de la parole donnée.",
        ouLeTrouver: "Amazon 14,98£" 
    },
    { 
        title: " Les Matinées Sombres", 
        author: "Chantal Magalie Mbazoo", 
        cat: "Société", 
        img: "lesmatinées.png",
        date: "2005",
        description: "Le roman raconte l'histoire de Félicité, une jeune femme dont la vie bascule dans la précarité et la souffrance. À travers son regard, le récit dépeint le quotidien difficile des populations urbaines confrontées à la pauvreté, au chômage et à l'effondrement des solidarités familiales. Les Matinées Sombres symbolisent ces réveils difficiles où l'espoir semble avoir déserté le foyer. Le livre suit le combat de cette femme pour garder sa dignité malgré les épreuves, les trahisons et la dureté d'une société qui ne fait pas de cadeaux aux plus démunis.",
        ouLeTrouver: "Librairies de Libreville" 
    },
    { 
        title: "Souffrance partagée", 
        author: "Mexcent Zue Elibiyo", 
        cat: "Drame", 
        img: "souffrancepartagée.png",
        date: "6 décembre 2016",
        description: "Dans Souffrance partagée, Mexcent Zue Elibiyo raconte le parcours de Boss, un jeune homme ambitieux issu d’un milieu modeste, confronté aux réalités difficiles de la vie sociale. À travers lui et les personnages qui l’entourent — notamment sa famille et ses proches — le roman met en lumière les espoirs, les sacrifices et les épreuves liés à la quête de réussite.Entre ascension fragile et retour aux valeurs essentielles, cette œuvre engagée aborde avec sensibilité les thèmes de la solidarité, des inégalités et de l’importance des liens humains.",
        ouLeTrouver: "Librairies de Libreville / Maison de la Presse 9000 FCFA / Amazon 10,49£" 
    },
    { 
        title: "Le voyage d'AURORE", 
        author: "Nadia Origo", 
        cat: "Aventure", 
        img: "levoyage.png",
        date: "19 octobre 2014",
        description: "Aurore est une jeune étudiante dynamique et engagée, inscrite à l'université du Gabon à Libreville. En 2000, en période de grandes vacances scolaires, elle part de la capitale avec ses deux coéquipiers Pilli et Gal de l'association Forêt-Source. A destination de l'Ogooué-Ivindo,l'une des plus belles régions du pays,ils vont à la rencontre des population locales. Leur mission consiste à exploiter harmonieusement les ressources forestières. Ils atterrissent à Makokou et sillonnent pendant quinze jours les villages alentours où ils tiennent des causeries avec l'aide des autorités locales. Ce séjour va être pour Aurore l'occasion de découvertes extraordinaires et surprenantes. Les trois coéquipiers, en écolos zélés, nous invitent à voyager au coeur de la forêt équatoriale.",
        ouLeTrouver: "Amazon 2,52£ / Maison de la Presse 6500 FCFA" 
    },
    { 
        title: "Elo la fille du soleil", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Mysticisme", 
        img: "elo.png",
        date: "01 avril 2008",
        description: "L’histoire met en scène une jeune fille d’une beauté exceptionnelle, dont l’éclat rappelle celui du soleil, symbole de vie et de puissance.Elo est admirée de tous, mais cette beauté singulière la rend aussi différente et parfois inaccessible. Selon les versions du récit, elle est soit convoitée, soit séparée du monde des humains, ce qui déclenche une quête ou une série d’épreuves. Ces événements mettent en lumière la difficulté de concilier deux mondes : celui des hommes et celui des forces célestes auxquelles elle est liée.À travers son parcours, Elo incarne une figure à la fois fascinante et mystérieuse, dont le destin oscille entre lumière, solitude et transformation.",
        ouLeTrouver: "L'Harmattan 14,00£/ Cultura(14,00£ Grand format; 9,99£ PDF)/ Maison de la Presse 21000 FCFA / Librairies de Libreville" 
    },
    { 
        title: "La fille du Komo", 
        author: "Sylvie Ntsame", 
        cat: "Tradition", 
        img: "lafille.png",
        date: "01 décembre 2004",
        description: "Roberte, jeune gabonaise, est allée en France poursuivre ses études supérieures. Un après-midi, alors qu'elle range des articles sur les étagères du supermarché dans lequel elle travaille, un client la heurte avec un chariot. Dès cet instant, ce bel inconnu ne ménagera plus aucun effort pour la rencontrer. De ces fréquentations, naît un amour où il s'avère parfois difficile de concilier toutes les incompréhensions générées par la rencontre de deux civilisations.",
        ouLeTrouver: " Amazon 17,50£ / Librairies de Libreville" 
    },
    { 
        title: "Les Matitis", 
        author: "Hubert Freddy Ndong Mbeng", 
        cat: "Société", 
        img: "lesmatiti.png",
        date: "01 janvier 1991",
        description: "Les Matitis est un roman ancré dans la réalité urbaine gabonaise, qui plonge le lecteur au cœur des quartiers populaires de Libreville, appelés “matitis”.Le récit suit des personnages confrontés aux difficultés du quotidien : pauvreté, débrouillardise, injustices sociales et espoir d’une vie meilleure. À travers leurs parcours, le roman dresse un portrait vivant et parfois dur de la société, où chacun tente de survivre et de trouver sa place.",
        ouLeTrouver: "Maison de la presse (Libreville)/ Amazon 44,00£" 
    },
    { 
        title: "Au bout du silence", 
        author: "Laurent Owondo", 
        cat: "Mysticisme", 
        img: "aub.png",
        date: "20 mars 2002",
        description: "il y' a des choses que seuls les initiés sont en mesure de connaître... Tel était le cas de Rèdiwa, l'aïeul dont les yeux savaient percer les apparences pour aller à l'essentiel. Sa mort prématurée laissera son petit-fils, Anka, désemparé. Pour le jeune adolescent commence alors une saison aux rigueurs de marâtre qui va le conduire du village natal à ' Petite Venise', dans les bas-fonds de la capitale. Au plus fort de cette épreuve s'imposera soudain le visage d'Ombre, l'épouse mystique venue de la nuit des temps pour répondre à son attente et le récompenser d'une si longue absence..",
        ouLeTrouver: "Amazon 12,65£" 
    },
    { 
        title: "FEMMES DE POUVOIR DU GABON", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "pouvoir.png",
        date: "26 août 2010",
        description: "Avec Femmes de pouvoir du Gabon, Janis Otsiémi poursuit son anatomie de la vie politique gabonaise à travers les portraits objectifs et subjectifs qu'il taille des femmes qui détiennent une parcelle d'influence, d'autorité et de pouvoir au Gabon. Si la plupart de ces femmes, sujet avoué de ce livre, sont essentiellement issues du Parti démocratique gabonais (P.D.G) ou pirouettent autour du pouvoir en place, pourvoyeur d'hommes et de femmes politiques depuis plus d'une quarantaine d'années, Janis Otsiémi a élargi son champ d'analyse aux femmes qui émergent aussi bien de l'opposition, du monde des affaires que de la société civile.",
        ouLeTrouver: "Amazon 10,00£" 
    },
    { 
        title: "Les voleurs de sexe", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "lesvoleurs.png",
        date: "01 septembre 2015",
        description: "À Libreville, une rumeur inquiétante plonge la ville dans la psychose : de mystérieux « voleurs de sexe » dépouilleraient leurs victimes d’une simple poignée de main. Tandis que la peur gagne les rues, les gendarmes enquêtent sur un scandale impliquant des photos compromettantes du président, pendant que la police traque les auteurs d’un braquage meurtrier.Dans une ville sous tension, ces affaires entremêlées révèlent un climat de violence, de rumeurs et de corruption où rien n’est jamais paisible.",
        ouLeTrouver: "Amazon (3.83£)" 
    },
    { 
        title: "FAM", 
        author: "Chantal Magalie Mbazoo", 
        cat: "Société", 
        img: "FAM.png",
        date: "01 novembre 2003",
        description: "FAM, un jeune diplômé revenu au pays avec son épouse Ewimane, affronte chômage, misère et humiliations. Malgré ses qualifications, Ewimane subit du harcèlement au travail et démissionne. FAM finit par entrer en politique, gravit les échelons jusqu’au gouvernement, mais quitte ses fonctions par conviction. Après des débuts difficiles et des élections annulées, il accepte finalement un compromis avec le pouvoir en place et parvient à remporter les élections.",
        ouLeTrouver: "Librairies de Libreville / Scribd (PDF)" 
    },
    { 
        title: "Ma vision. Pour un Gabon transformé", 
        author: "Alain Dider Anyunzoghe", 
        cat: "Société", 
        img: "mavision.png",
        date: "04 septembre 2020",
        description: "Le Gabon souffre aujourd'hui des effets désastreux de tâtonnements endémiques et d'exactions financières, politiques et sociales du régime père et fils en place. II faut une révolution des mentalités et un patriotisme majeur pour réussir la révolution politique, sociale, économique et culturelle qui fera du Gabon un Etat démocratique ; et qui fera des Gabonais un peuple conscient de l'importance de s'impliquer avec honneur et dignité dans la longue trajectoire d'un destin commun .",
        ouLeTrouver: "L'Harmattan 24,50£ / Amazon 24,50£" 
    },
    { 
        title: "Le bal des débutants", 
        author: "Nadia Origo", 
        cat: "Mysticisme", 
        img: "lebal.png",
        date: "26 février 2014",
        description: "Tous les chemins mènent à la réussite, mais au bout d'une voie large et spacieuse peut se cacher une mare aux crocodiles. Après l'annonce que vient de lui faire le Victus-Malia, le grand maître de la loge des Monolistes, le jeune homme marche depuis une heure, il n'en revient toujours pas. Que va-t-il faire? ",
        ouLeTrouver: "Maison de la Presse 15000FCFA / Fnac 10£ / Amazon 19,35£" 
    },
    { 
        title: "Volatilisée", 
        author: "Alice Endamne", 
        cat: "Drame", 
        img: "volatilisee.png",
        date: "01 août 2022",
        description: "Saint-Maur, 1981. Comme tous les samedis, Hugo Valdenaire part se promener avec Charlène, sa fille de 10 mois. Et comme tous les samedis, Désirée Valdenaire attend leur retour avec impatience. Mais ce samedi, contrairement à tous les autres, quand Désirée ouvre la porte de leur appartement, prête à câliner sa fille, elle découvre son mari escorté de deux agents de police. Son sourire disparaît aussi vite qu'il est apparu. Charlène a été enlevée... Volatilisée. En quelques secondes. Les jours passent, puis les mois et les années. Charlène reste introuvable. Hugo et Désirée trouveront-ils la force d'avancer malgré tout ? Hugo réussira-t-il à se pardonner les quelques secondes qui ont changé leur vie à tout jamais ? Et puis toujours... où est Charlène ? Dans ce roman choral qui oscille entre passé et présent, Alice Endamne nous entraîne au cœur d'une histoire palpitante à l'issue incertaine.",
        ouLeTrouver: "Amazon 21,10£" 
    },
    { 
        title: "La vie est un sale boulot", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "lavieest.png",
        date: "01 septembre 2009",
        description: "À Libreville, Chicano sort de prison, après avoir purgé quatre ans pour un braquage qui a mal tourné ! Adieu la bande de paumés, finies les embrouilles, il veut devenir quelqu’un, un honnête homme si possible… Reconquérir Mira, trouver un boulot, monter un petit commerce et gagner sa galette à la sueur de son front, voilà son rêve !Mais comment faire quand on a ni sou, ni métier, ni diplôme dans un pays où la corruption est la règle d’or à tous les carrefours ?Car ici plus qu’ailleurs, si la barbe et le grelot ne font pas une chèvre… la vie est souvent un sale boulot !.",
        ouLeTrouver: "Amazon 3.60£" 
    },
    { 
        title: "C'est demain qu'on s'fait la malle", 
        author: "Alice Endamne", 
        cat: "Amour", 
        img: "malle.png",
        date: "mai 2018",
        description: "Lætitia, une jeune Française d'origine africaine qui vit dans le Sud de la France, entre au lycée et rencontre Stéphane-le-Skinhead, un camarade de classe blanc aux convictions de pureté raciale. Attirée malgré elle par ce jeune homme dont tout la sépare, elle réussit à établir avec lui, petit à petit, une relation fragile, sincère et émouvante. Mais Lætitia et Stéphane parviendront-ils à dépasser leurs valeurs, leurs blessures intérieures, et à s'imposer dans leurs milieux respectifs? Dans cette histoire captivante, riche en événements, l'auteur analyse avec finesse les problématiques des premières amours confrontées aux différences culturelles et ethniques. Et, au travers de ces deux héros adolescents, elle pointe la responsabilité des adultes et aborde le problème de l'intégration pour les immigrés de deuxième génération.",
        ouLeTrouver: "Edition Jets d'Encre 17,00£ /Amazon 10,00£ / Cultura 17,00£ / Fnac 17,00£" 
    },
    { 
        title: "G'amèrakano au carrefour", 
        author: "Angèle Rawiri", 
        cat: "Société", 
        img: "aucarrefour.png",
        date: "01 décembre 2004",
        description: "Toula, née pauvre, peu scolarisée, lutte pour survivre et travaille en ville comme dactylo pour un maigre salaire. Elle vit avec sa mère, sa grand-mère et ses frères à Igewa, quartier misérable qu'elle veut quitter.",
        ouLeTrouver: "Maison de la Presse 20250 Fcfa / Fnac 16£ / Cultura 6,49£ / Librairie Eyrolles 13,50£ / Amazon 11,90£" 
    },
    { 
        title: "Programmé pour mourir", 
        author: "Ken Arnaud Gildas Koumba", 
        cat: "Aventure", 
        img: "programme.png",
        date: "13 août 2015",
        description: "La nuit fut très courte pour Ngambi. Au petit matin de ce mercredi 8 octobre, il alla à la gare routière mais malheureusement il n'y avait aucune voiture pour Massanga. Il ne trouva qu'une vieille voiture pour Mouila Magondo appelé ¨tombeau ouvert¨, surnom donné au chauffeur pour son goût très poussé pour l'excès de vitesse malgré l'état de vétusté de son bolide. Ngambi se rapprocha des chargeurs qui lui firent comprendre qu'il y avait pénurie de voiture en partance pour Massanga mais qu'il pouvait faire escale à Magondo... L'état du véhicule aurait dû décourager Ngambi le sage, mais comme poussé par un esprit supérieur...",
        ouLeTrouver: "Aazon 2000£ / Librairie Eyrolles 18,50£ " 
    },
    { 
        title: "La valse des initiées", 
        author: "Nadia Origo", 
        cat: "Mysticisme", 
        img: "lavalse.png",
        date: "24 septembre 2014",
        description: "Lettre à ces Martial, Convaincus que le bien-être vaut par l'acquis matériel, vous vous lancez aveuglément dans des aventures ambigües, étranglés et soumis à des dilemmes, je vous tends la main et vous invite à cette solennelle VALSE Des Initiés. Ce roman répond à Le Bal des débutants, de Nadia Origo paru en 2012 aux Editions La Doxa. Ecrit dans un langage accessible et traduisant un réalisme connu de nos sociétés « élitistes », cette nouveauté de l'auteure laisse transparaître le franc-parler qui caractérise ses œuvres littéraires.",
        ouLeTrouver: "Amazon 3,20£ /Maison de la Presse 15000 Fcfa " 
    },
    { 
        title: "Un seul tournant Makôsu", 
        author: "Justine Mintsa", 
        cat: "Société", 
        img: "makosu.png",
        date: "01 octobre 2004",
        description: "Il s'agit là d'un journal ponctué d'humour et de pathétique d'une jeune femme dans une université d'un pays en voie de développement qui pourrait être le Gabon. Sous cette forme originale, avec une sensibilité certaine, les problèmes posés par les jeunes universités africaines, avec en arrière-plan politique, une démocratie balbutiante.",
        ouLeTrouver: "Librairies de Libreville / Maison de la Presse 21750Fcfa / L'Harmattan 14,50£ /Fnac 10,50£" 
    },
    { 
        title: "Le festin de l'aube", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "lefestin.png",
        date: "22 février 2018",
        description: "Par une nuit de pluie, une femme surgit et se jette sous la voiture du lieutenant Boukinda. Troublé par ce drame aux circonstances suspectes, il cherche à comprendre son origine. Au même moment, un groupe armé vole des armes dans un camp militaire, tandis qu’un braquage sanglant plonge une ville déjà minée par la violence dans le chaos.D’abord sans lien apparent, ces événements finissent par se rejoindre et révéler un complot inquiétant. Dans un climat de tensions sociales et politiques, forces de l’ordre et gendarmes doivent unir leurs efforts pour tenter de l’arrêter.",
        ouLeTrouver: "Amazon 9.35£ / Cultura 9£ / Maison de la Presse 10975 FCFA" 
    },
    { 
        title: "Les Larmes de Tsiana", 
        author: "Sylvain Nzamba", 
        cat: "Drame", 
        img: "Tsiana.png",
        date: "15 juillet 2007",
        description: "Orpheline de mère dès l'âge de 4 ans, maltraitée par sa belle-mère, battue par son tuteur, triste destin qu'est celui de Tsiana.",
        ouLeTrouver: "Fnac 12,50£ " 
    },
    { 
        title: "Le sein d'Adomi", 
        author: "Lié Luc MOUNGUENGUI NYONDA", 
        cat: "Société", 
        img: "sein.png",
        date: "01 février 2006",
        description: "Le sein d’Adomi est une œuvre forte et symbolique qui met en lumière les réalités sociales et politiques du Gabon. À travers une écriture poétique et engagée, l’auteur dénonce les injustices, la misère et l’exploitation d’un peuple face à des élites prédatrices.Porté par des images puissantes, le texte donne une voix aux opprimés et invite à une réflexion profonde sur la société, la gouvernance et la dignité humaine.",
        ouLeTrouver: "Les Edition l'Harmattan 11.50£ / Fnac 8,49£ / Kindle Store 7,88£" 
    },
    { 
        title: "L'extraordinaire éloquence du silence", 
        author: "Pélagie Ntsame Obame", 
        cat: "Société", 
        img: "pelagie.png",
        date: "2021",
        description: "Il avait choisi la voie du silence. Purée ! Mais le silence parle. II peut être aussi assourdissant que les cris, aussi tonitruant que le bruit, aussi explicite que les mots, provoquer autant de vacarne qu'une dispute. Le silence est un langage. En musique, il y'a autant de figures de silences que de figures de notes. Une œuvre musicale, quelle qu'elle soit, ne peut être parfaite sans les espaces de silence. Le silence peut être aussi apaisant que destructeur. En faite, beaucoup de gens ignorenL'EXTRAORDINAIRE ÉLOQUENCE DU SILENCE et les dégâts qu'il est à même de provoquer .ELOQUENCE DU SILENCE. Bien plus que tout autre langage, le silence peut prêter à toutes sortes d'interprétations possibles et inimaginables. Chacun peut lui prêter des intentions, lui donner des intonations, mettre dessus ce qu'on veut, penser ce que bon lui semble, imaginer le meilleur comme le pire. Ce qu'on peut expliquer en peu de mots prend des proportions énormes, des conclusions étranges, voire dramatiques, face au silence , surtout au silence de l’absent",
        ouLeTrouver: "GIPA 6500FCFA" 
    },
    { 
        title: "Un amour au Gabon ou la fille du balcon", 
        author: "Aubin Mazaye", 
        cat: "Amour", 
        img: "balcon.png",
        date: "03 juillet 20233",
        description: "Corentin, 17 ans, arrive de France pour retrouver ses parents à Libreville, au Gabon. Il est concentré pour passer le bac, mais une mystérieuse fille à son balcon va perturber son objectif bien défini. Nous découvrirons dans ce roman les rivalités amoureuses et les cheminements de la pensée qui traversent les esprits à cet âge si difficile...",
        ouLeTrouver: "Amazon 9,50£" 
    },
    { 
        title: "Ngongo des initiés", 
        author: "MABIK-ma-KOMBIL", 
        cat: "Société", 
        img: "ngongo.png",
        date: "01 novembre 2003",
        description: "Les pleureuses sont des femmes qui se lamentent autour des morts. Elles se servent de Ngongo pour guider l'esprit de la dépouille au Yingi-Ndongu. Nous entrons dans le monde magique où les pleureuses, ces femmes bantous pleurent en parlant, en chantant, et accompagnent leurs mélodies de gestes remarquables. Nous dévoilons au travers des rites funéraires, de palabre, de veuvage, de port et de retrait de deuil les contours mystiques, initiatiques et spirituels de cette activité sacrée.",
        ouLeTrouver: "Fnac 14,99£ / Amazon" 
    },
    { 
        title: "Zong et Mekui", 
        author: "Alice Endamne", 
        cat: "Amour", 
        img: "zong.png",
        date: "27 juillet 2025",
        description: "Zong est le fils de la sorcière du village Minal. Mekui est la fille de la guérisseuse du village Nlem. Lorsqu'ils tombent amoureux l'un de l'autre, une bataille se déclenche entre le bien et le mal.",
        ouLeTrouver: "Amazon 13,70£ " 
    },
    { 
        title: "Le bruit de l'héritage", 
        author: "Jean Divassa Nyama", 
        cat: "Société", 
        img: "bruit.png",
        date: "2002",
        description: "Dans ce troisième volet de la trilogie intitulée La calebasse, Muile, le village fétiche de Jean Divassa Nyama n'est plus ! À sa place, on a construit un aéroport... Les pêcheurs de la lagune les plus âgés sont relogés dans les montagnes, les jeunes se perdent en ville. Mais, les Ancêtres ? Qu'a-t-on fait des Ancêtres ? Ils sont restés sous l'asphalte de la piste. Ils en sont très mécontents, et bien décidés à le faire savoir à leurs descendants. Ils vont faire du bruit, ce sera : Le Bruit de l'héritage. Avec des mots simples, Jean Divassa Nyama raconte l'histoire de gens humbles dont il fait d'authentiques héros. Les anecdotes, parfois cocasses, toujours riches d'émotion, tissent la trame d'une histoire qui restera comme la mémoire de l'Afrique Centrale d'aujourd'hui.",
        ouLeTrouver: "Amazon 6,49£ / Cultura 27,00£ " 
    },
    { 
        title: "Les femmes de Bidibidi", 
        author: "Charline Effah", 
        cat: "Société", 
        img: "bidi.png",
        date: "25 août 2023",
        description: "Après la mort de son père, Minga apprend que sa mère, Joséphine, a disparu dans des circonstances mystérieuses en Afrique de l'est, où elle travaillait pour une ONG. Pour tenter d'en savoir plus, elle se rend dans le camp de Bidibidi, au nord de l'Ouganda, où vivent les populations fuyant la guerre civile qui fait rage au Soudan du Sud. Elle découvre que tout tourne autour d'une femme : Rose, dont la mémoire hante chaque recoin du camp. Si elle veut savoir le fin mot de l'histoire, Minga doit trouver Rose.",
        ouLeTrouver: "Amazon 15,50£ /19,00£ / Google Play Livres 12,99£" 
    },
    { 
        title: "Histoire de la République gabonaise", 
        author: "Lassy Mbouity", 
        cat: "Société", 
        img: "republiqueg.png",
        date: "15 juin 2016",
        description: "Le Gabon est un pays d'Afrique centrale situé à cheval sur l'équateur et drainé par le fleuve Ogooué et ses affluents. Il est bordé par l'océan Atlantique à l'ouest, la Guinée équatoriale et le Cameroun au nord, et le Congo-Brazzaville à l'est et au sud. Libreville et Port-Gentil sont les deux principales villes du pays. Le Gabon est devenu une république indépendante le 17 août 1960 avec Léon Mba comme premier président de 1961 à 1967. Depuis les années 1970, l'économie gabonaise a été centrée sur l'industrie pétrolière, qui a fourni au pays l'un des PIB par habitant les plus élevés au monde et représente près de 80% de ses revenus d'exportation et 50 % de son PIB. Les principaux partenaires commerciaux du Gabon sont les États-Unis, la France et la Chine.",
        ouLeTrouver: "Amazon 23,48£ /Librairie Eyrolles 15,50£ / Decitre 15,50£" 
    },
    { 
        title: "50 figures de la litterature gabonaise de 1960 à 2010", 
        author: "Eric Joel Bekale", 
        cat: "Société", 
        img: "50.png",
        date: "01 mars 2013",
        description: "Un livre invitant à la découverte de la littérature gabonaise à travers une rencontre de ces figures qui l'ont marqué depuis son indépendance et qui continuent de l'écrire.",
        ouLeTrouver: "Amazon 8,25£ / Fnac 8,25£" 
    },
    { 
        title: "Le rêve de Nyenzi", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Société", 
        img: "nyenzi.png",
        date: "2010",
        description: "Le rêve de Nyenzi raconte le parcours d’un jeune homme animé par de grandes ambitions, mais confronté aux réalités difficiles de son environnement. Entre espoirs, désillusions et pressions sociales, Nyenzi tente de construire son avenir et de trouver sa place dans une société marquée par les inégalités.À travers son cheminement, le roman met en lumière la confrontation entre rêve et réalité, tout en abordant avec sensibilité les défis de la jeunesse et la quête d’identité..",
        ouLeTrouver: "Librairies de Libreville / GIPA 8500 FCFA" 
    },
    { 
        title: "L'OR BLANC DU GABON", 
        author: "Eric RAÏVIRE", 
        cat: "Société", 
        img: "lor.png",
        date: "01 décembre 2024",
        description: "Depuis plusieurs décennies, la filière sucrière joue un rôle crucial dans l'économie agricole du Gabon. Pourtant, derrière les chiffres de production et les initiatives industrielles, ce secteur cache une réalité plus complexe, faite de défis structurels et logistiques. A travers une analyse détaillée, Eric Raïvire explore les méthodes de culture, les acteurs locaux et internationaux qui façonnent et animent cette industrie, ainsi que les infrastructures indispensables pour acheminer le sucre à travers le pays, et le monde. En s'appuyant sur des études de cas, l'auteur met en lumière les failles de la distribution — des routes peu denses et un réseau ferroviaire vétuste -, les difficultés d'accès aux marchés et les obstacles à une production stable. Tout en donnant des pistes pour dynamiser cette filière, il met en valeur le savoir-faire africain capitalisé depuis plus de cinquante ans, et propose un regard en perspective pour comprendre le Gabon et l'Afrique de demain, partagés entre fragilités économiques et obligations de structurer les filières sucrières pour une meilleure compétitivité sur le marché international. Ce livre est un appel à l'action pour réinventer une industrie vitale pour le développement durable du Gabon et du continent africain.",
        ouLeTrouver: "Amazon 17,00£ / Cultura 17,00£ / Fnac 17,00£" 
    },
    { 
        title: "Histoire d'une vie", 
        author: "Edna Yamba", 
        cat: "Société", 
        img: "edna.png",
        date: "24 octobre 2018",
        description: "La vie est un torrent de surprises où chacun doit faire face à ses réalités et tenter de s'en sortir. Voici l'histoire de Paul qui jusque-là vivait dans sa bulle de bonheur avec un poste convenable et une famille heureuse jusqu'au jour où perdant son emploi, il voit le monde s'effondrer et doit tout tenter pour retrouver sa stabilité.  Ailleurs Jessica doit payer les erreurs de ses parents qui ont lâché prise après la perte de leur position sociale, elle doit rembourser une dette contractée par son père au prix de son corps et s'occuper d'offrir à son fils et son frère une chance de réussir qu'elle n'a pas eu. La vie est un ring où chacun doit donner les coups qu'il faut pour tenir debout et réussir. Comment nos deux héros vont-ils faire face à leur destin ?",
        ouLeTrouver: "Amazon 23,00£ / Decitre 23,00£" 
    },
    { 
        title: "Percées et chimères", 
        author: "Charline Effah", 
        cat: "Société", 
        img: "chim.png",
        date: "01 octobre 2011",
        description: "Confrontée à la peur de rater sa vie, Mélina « essaie d'exister». C'est ce quelle tente d'expliquer à sa mère, Mema, qui décidément ne comprend pas grand-chose à cette jeune femme quelle juge plutôt bonne à rien parce quelle na pas encore trouvé d'homme riche à épouser.Poussée par Diane, sa meilleure amie, Mélina va consulter Aladji Bakary, un vieux marabout qui lui prédit un avenir de rêve exactement ce quelle voulait entendre. Histoire de forcer un peu le destin à s'accomplir, la jeune femme s'envole pour Paris. Ce qu'ell e va y trouver parmi ses frères et sœurs de galère ne correspondra pas tout à fait à ce qui était écrit Peut-on échapper à son destin ? Dune très belle plume pleine de couleurs, l'auteur nous attache à la quête dune héroine, touchante, qui cherche simplement à s'aimer jusqu'au dénouement de son histoire, ironique et dramatique.",
        ouLeTrouver: "Amazon 18,00£ " 
    },
    { 
        title: "La vocation de dignité", 
        author: "Jean Divassa Nyama", 
        cat: "Tradition", 
        img: "vocation.png",
        date: "1997",
        description: "La vocation de Dignité est l'histoire d'une petite fille née à Muile, un village au sud du Gabon. Elle grandit sous l'oeil attentif d'Oncle Mâ, qui l'initie avec la même ferveur au christianisme et à la pensée magique : à Muile, il pleut des grenouilles et Mwiri, l'homme caïman, protège les jumeaux. Une vocation de religieuse naît dans le coeur de Dignité. Elle rêve de mettre ses qualités au service de ces femmes et de ces hommes déracinés qui, dans la grande ville, ont perdu leurs repères. Une vocation qui chagrine profondément sa mère voyant là la fin de sa lignée. Oncle Mâ la convaincra-t-il que l'honneur de la tribu passe avant ses espérances personnelles ?",
        ouLeTrouver: "Amazon 6,01£ / Ombres blanches 10,00£ /Fnac 6,00£" 
    },
    { 
        title: "Au-delà des frontières", 
        author: "Munkonda Mbuluku Mikiele", 
        cat: "Société", 
        img: "audela.png",
        date: "29 juin 2016",
        description: "Dans un État africain imaginaire mais terriblement réaliste, le quotidien est marqué par l'oppression et l'absence d'horizon. C’est dans ce climat de tension que nous suivons le destin de Nzimba, un jeune homme dont l'idéalisme va être mis à rude épreuve. Refusant la fatalité de la soumission, Nzimba choisit une voie radicale : celle de la rébellion armée. Son voyage l'emmène bien au-delà des frontières géographiques de son pays, le plongeant dans les méandres de la lutte clandestine et de la guérilla. Mais au fur et à mesure qu'il franchit ces limites, il est confronté à une frontière bien plus complexe : celle qui sépare ses convictions profondes de la réalité brutale de la guerre.",
        ouLeTrouver: "GIPA 8950 FCFA " 
    },
    { 
        title: "Le Gabon", 
        author: "François d'Herville", 
        cat: "Société", 
        img: "gabon.png",
        date: "1976",
        description: "L'image que l'on se fait habituellement du Gabon, pour être juste, n'en est pas moins incomplète. Ce petit pays d'Afrique centrale , de 267 667 km2, situé à cheval sur l'équateur, est certes l'une des nations économiquement les plus en pointe du continent noir. ",
        ouLeTrouver: "Kindle Store 5,99£ / Google Play Livres 5,99£" 
    },
    { 
        title: "Chroniques du Gabon", 
        author: "Dominique Ranaivoson", 
        cat: "Société", 
        img: "chroniques.png",
        date: "22 décembre 2022",
        description: "Le Gabon, petit pays francophone d'Afrique centrale caractérisé par sa grande forêt et ses gisements de pétrole, n'a encore que peu d'écrivains d'envergure internationale. Ce recueil de nouvelles entend, comme les précédents titres de la collection, donner à lire quelques-unes de ses plumes émergentes. Les styles et les thèmes comme les parcours des auteurs sont divers mais tous entendent exprimer en français leurs émotions et leur vision d'une société où les traditions et les rapports de pouvoir engendrent des situations complexes.",
        ouLeTrouver: "L'Harmattan 10,00£ / Amazon 10,00£" 
    },
    { 
        title: "Larmes de cendre", 
        author: "Justine Mintsa", 
        cat: "Tradition", 
        img: "larme.png",
        date: "01 janvier 2013",
        description: "'''Son visage était pâle, sans doute à cause du rare contact avec le soleil. Ses yeux mi-clos invitaient à un abîme sans fond. Sa bouche s'inscrivait en permanent dégoût. Ses mâchoires constamment serrées semblaient manifester une férocité contenue. Et ce cou, naguère incitation à la caresse, et qui avait hanté mes nuits, affamé, assoiffé mes lèvres, semblait aujourd'hui attendre une corde, ou un joug.'''",
        ouLeTrouver: "L'Harmattan 16,00£ / Amazon 16,00£ / Fnac 16,00£ / Kindle Store 11,99£ / Google Play Livres 11,99£" 
    },
    { 
        title: "Les aventures d'Imya, petite fille du Gabon", 
        author: "Edna MEREY-APINDA", 
        cat: "Société", 
        img: "imya.png",
        date: "02 octobre 2004",
        description: "Ce roman nous conte le vie d'une fillete nommée Imya,elle a 7 ans et vit dans un village africain. Sa vie est bercée par les jeux avec les amis et contes le soir autour du feu.Jusqu'au jour où il faut quitter ce petit paradis et partir pour la grande ville.",
        ouLeTrouver: " L'Harmattan 13,00£/Fnac 13,00£/ Amazon 13,00£" 
    },
    { 
        title: "Le Gabon et son ombre", 
        author: "François Gaulme", 
        cat: "Société", 
        img: "ombre.png",
        date: "01 janvier 1988",
        description: "L'auteur explore l'identité du Gabon en remontant aux racines des différentes ethnies qui composent le pays (notamment les Mpongwè et les Fang). Il cherche à expliquer comment ces sociétés traditionnelles ont traversé la période coloniale pour aboutir à l'État moderne.",
        ouLeTrouver: "Amazon 36,35£" 
    },
    { 
        title: "Le bourbier", 
        author: "Armel Nguimbi Bissielou", 
        cat: "Société", 
        img: "boubier.png",
        date: "30 novembre -1",
        description: "Un roman qui décrit les abus et les défaillances de deux décennies du monopartisme installé au Gabon. « Copyright Electre ».",
        ouLeTrouver: "Amazon 8.49£" 
    },
    { 
        title: "La bouche qui mange ne parle pas", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "bouche.png",
        date: "2010",
        description: "Solo vient de purger trois ans de taule pour une bagarre qui a mal tourné. A sa sortie, son cousin Tito, un vrai dur, lui propose une affaire... Il lui suffit de voler une voiture, de l'accompagner sur un coup et de manger sa langue. Une sacrée bonne aubaine pour ambiancer toute la nuit et régler ses dettes...",
        ouLeTrouver: "Amazon 2,41£ / Fnac 2,40£" 
    },
    { 
        title: "La femme et ses images dans le roman gabonais", 
        author: "Chantal Magalie Mbazoo", 
        cat: "Société", 
        img: "lafemmeetses.png",
        date: "01 février 2009",
        description: "L'étude de la femme et de ses images dans la prose romanesque gabonaise est surtout une photographie de la femme plurielle, telle qu'elle se donne à lire à travers les mécanismes d'écriture des auteurs, notamment :Ntyugwetonde Angèle Rawiri, Laurent Owondo Ambaye et Maurice Okoumba-Nkoghe. Quatre images féminines, à savoir ''''aliénée''', ''a rebelle ou la révoltée''', '''la déterminée ou la rusée'''' , et'émancipée",
        ouLeTrouver: "L'Harmattan 24,00£ /Fnac 24,00£" 
    },
    { 
        title: "Le Chasseur De Lucioles", 
        author: "Janis Otsiemi", 
        cat: "Drame", 
        img: "lucioles.png",
        date: "12 février 2012",
        description: "À Libreville, une prostituée est découverte sauvagement assassinée dans un motel de la périphérie. Les agents de la PJ - de fidèles abonnés des bordels de la capitale - pensent tout d'abord à un crime de rôdeur...Quand une seconde fille est retrouvée égorgée dans un autre hôtel du quartier, les policiers sont encore loin d'imaginer qu'ils ont affaire à un client bien décidé à nettoyer la ville de toutes ses lucioles... Celui qui te veut du mal la nuit a commencé à t'en vouloir le jour. C'est dans ce climat de psychose générale que les gendarmes de la DGR enquêtent de leur côté sur le braquage d'un fourgon de la Société Gabonaise de Sécurité dont le butin de plusieurs millions de francs CFA attise bien des appétits....",
        ouLeTrouver: "Fnac 4.78£ / Amazon 3.87£/ Cultura 3.74£" 
    },
    { 
        title: "Le Roman initiatique gabonais", 
        author: "Jean Léonard NGUEMA ONDO", 
        cat: "Société", 
        img: "init.png",
        date: "01 septembre 2011",
        description: "Depuis 1971, se développe au Gabon un roman initiatique hybride, ouvert à l'oralité et à l'écriture, qui se présente comme un hymne à la tradition et à la modernité. On y rencontre des personnages qui s'ouvrent tout à la fois au christianisme et aux valeurs spirituelles africaines. Ce livre montre comment l'intégration grandissante de l'oralité traditionnelle dans le roman ouvre finalement une nouvelle voie vers une modernité textuelle gabonaise et/ou africaine.",
        ouLeTrouver: "L'Harmattan 24£ / Amazon 24£" 
    },
    { 
        title: "Contes et légendes du Gabon", 
        author: "Marc Koutekissa", 
        cat: "Société", 
        img: "légende.png",
        date: "01 novembre 2007",
        description: "Batouétoué le chasseur était vraiment désolé, il n'y avait plus de gibier dans la forêt et dans la brousse autour du village. Il devait chasser de plus en plus loin. Un jour il prit son fusil et se rendit dans la forêt. Il marchait depuis longtemps déja, lorsqu'il aperçut un gros oiseau perché sur un arbre. Batouétoué chargea son fusil, visa et s'apprêta à tirer sur l'oiseau. Ah enfin du gibier sur cette haute branche, il est bien gros. Oh de la viande, je vais l'abattre. J'arme mon fusil. Mais on dirait que cet oiseau va chanter ? : C'est alors qu'il entendit l'oiseau chanter. Ne me tue pas Dong Dong Dong, si tu me tues, tu verras Dong Dong Dong.",
        ouLeTrouver: "Amazon 13,59£" 
    },
    { 
        title: "Siana Aube éternelle", 
        author: "Okoumba-Nkoghe", 
        cat: "Société", 
        img: "aube.png",
        date: "01 janvier 1985",
        description: "Entre autres choses, l’écriture est un art de la mémoire. Jeune médecin, le héros éponyme de ce roman veut écrire un livre sur sa vie. Il tente de porter un regard neuf sur son enfance. Oscillant entre le passé et le présent, il s’efforce d’explorer en profondeur tous les faits que sa mémoire peut exhumer...",
        ouLeTrouver: "Amazon 7,49£ / Fnac 7,49£ / Kindle Store 7,49£" 
    },
    { 
        title: "Le soir autour du feu", 
        author: "Sylvie Ntsame", 
        cat: "Société", 
        img: "feu.png",
        date: "2010",
        description: "Noël et les cadeaux, paresse et tromperie, orgueil et irrespect, curiosité, avarice, gourmandise, art, tels sont les thèmes des huit contes rassemblés dans cet opus .",
        ouLeTrouver: "Librairies de Libreville / Takam Tikou 6,50£  " 
    },
    { 
        title: "N'être", 
        author: "Charline Effah", 
        cat: "Société", 
        img: "etre.png",
        date: "18 mars 2016",
        description: "Le roman suit le parcours de Wandja, une femme qui tente de se construire malgré le poids d'un héritage familial douloureux. Elle entretient une relation complexe et marquée par le désamour avec sa mère.",
        ouLeTrouver: "Amazon 33,99£ " 
    },
    { 
        title: "Ce soir, je fermerai la porte", 
        author: "Edna MEREY-APINDA", 
        cat: "Société", 
        img: "soir.png",
        date: "01 avril 2007",
        description: "Tout a commencé ce jour où Gigi le voisin m'a vue descendre de la voiture de Célestin. Pensez-vous, le type est allé tout droit raconter la chose à maman. Elle n'en a pas dormi de la nuit. Dans son sommeil, elle a dû se répéter : '''Dis-moi Nathalie que cet homme est le papa d'une de tes amies.'' II avait 47 ans et j'en étais amoureuse. Il me gatait. Nous passions partois des week-ends à Libreville. Il fallait que je trouve un mensonge à sortir à maman.",
        ouLeTrouver: "L'Harmattan 12,00£ / Amazon 12,00 £ / Fnac 12,00£" 
    },
    { 
        title: "AKOMAYA, un destin pour deux hommes", 
        author: "Daniel Menie Bengone", 
        cat: "Tradition", 
        img: "akomaya.png",
        date: "26 septembre 2024",
        description: "Tsira Beyeme, sentant sa mort prochaine, confie son akomaya à son fils, Akoma. Cette « chose » fera de lui un homme prospère. Néanmoins, lorsque son frère cadet deviendra adulte, Akoma devra la lui transmettre afin qu'il en jouisse et perpétue la grandeur familiale. Cependant, à Mefoup, comme ailleurs, l'akomaya ne se partage pas. Cette « chose» façonne toujours le destin d'un seul homme. À travers ce récit, l'auteur présente une société fang-beti partagée entre tradition et modernité : celle qui vit désormais dans un environnement urbain, tout en conservant le souvenir, nostalgique, d'une ruralité heureuse; celle qui considère l'instruction occidentale comme la clé de la réussite sociale, tout en restant, paradoxalement, attachée au mysticisme. Ce roman est, selon Paul Armand Ntogue, un « succulent récit des destins croisés de deux enfants de la forêt qui, a eux seuls, résument les parcours et les évolutions de nos sociétés contemporaines ; tant du point de vue géographique et topographique que de celui des moeurs et habitus. »",
        ouLeTrouver: "L'Harmattan 17,00£ / Amazon 17,00£ / Fnac 17,00£" 
    },
    { 
        title: "Omar Bongo Ondimba L'insoumis", 
        author: "Grégorie Biyogo", 
        cat: "Société", 
        img: "Omar.png",
        date: "01 mars 2008",
        description: "Cette recherche monumentale retrace l'histoire du Gabon depuis l'indépendance, avant d'aborder l'art de gouverner d'Omar Bongo. Elle examine minutieusement la fonction présidentielle, les effets de la mondialisation et présente sa vision d'un Nouvel Ordre International, fondée sur une économie pragmatique, une diplomatie pacifique et une politique consensuelle. Cette somme constitue aussi une déconstruction de la rhétorique classique de la science politique et veut donner naissance à la philosophie politique de la mondialisation et à la philosophie de la science politique.",
        ouLeTrouver: "Amazon 45,50£ L'Harmattan 45,50£" 
    },
    { 
        title: "La courbe du soleil", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Société", 
        img: "courbe.png",
        date: "1993",
        description: "Diplômé en finances publiques et Docteur en économie, Njoye, comme beaucoup de jeunes de sa génération décide de rentrer dans son pays d'origine. Sa rencontre avec celui qui pourrait être son ministre employeur ne se passe pas comme prévu, mais Njoye veut travailler pour son pays. L'homme d'État qu'il rencontre abhorre tout ce qui est études universitaires ou expériences dans de grandes institutions. Njoye, qui n'est pas dupe, sait que pour obtenir une place dans ce monde de « puissants » dans les ressources du pays, il doit faire profil bas, à la limite devenir démagogue et feindre d'ignorer son savoir pour s'attirer les faveurs du ministre. Entre histoire familiale, trahison, histoire d'amitié et marchandisation du sexe, l'auteur nous apprend que le tout politique est devenu le seul moyen de survie de tout un peuple pris en otage par une minorité irresponsable. Cette histoire c'est aussi l'histoire de l'Afrique postcoloniale. L'histoire de l'irresponsabilité sociale et la perversion de l'idéal démocratique.",
        ouLeTrouver: "Amazon 15,00£ /Cultura 15,00£ / La Kazabul Martinique 17,25£" 
    },
    { 
        title: "Tu as fait de moi celui qui enjambe le monde", 
        author: "Stève Wilfrid Mounguengui", 
        cat: "Société", 
        img: "enjambe.png",
        date: "04 avril 2023",
        description: "Stève Wilifrid Mounguengui quitte le Gabon à 25 ans pour étudier en France, sur les encouragements de sa mère qui lui demande de réussir loin du pays. Il ne la reverra jamais. Entre exil et nostalgie, il lui rend hommage à travers une écriture poétique, évoquant son arrivée en banlieue parisienne et les souvenirs lumineux de son enfance au Gabon, marquée par l’amour et la force d’une mère exceptionnelle.",
        ouLeTrouver: "Amazon 8.99£ / Fnac 13,00£ / Cultura 13,00£" 
    },
    { 
        title: "Voyage sur l'équateur", 
        author: "Eric Ondo Bounguendza", 
        cat: "Société", 
        img: "voyage.png",
        date: "01 mars 2020",
        description: "Le Gabon est une terre riche de traditions et de cultures variées. Désireux de mieux connaître les peuples de son pays, Eric Dodo Bounguendza l'a parcouru durant neuf ans, recueillant précieusement toponymes et anecdotes, relatant fidèlement us et coutumes et étudiant avec finesse les pratiques langagières comme culturelles des peuples du Gabon ainsi que leur vision du monde. De ce voyage ethnolinguistique sur l'équateur, il a tiré ce livre, délicieuse invitation à la (re)découverte de l'incroyable diversité des langues et des traditions gabonaises... Dans cet ouvrage nourri de réflexions et d'enquêtes de terrain, somme de près de dix ans de travail, Eric Dodo Bounguendza présente la complexité et les subtilités des ethnies gabonaises dans l'espoir de faire aimer à ses lecteurs les trésors de son pays.",
        ouLeTrouver: "Amazon 29,35£" 
    },
    { 
        title: "Les ténèbres de LEKINDOU", 
        author: "Yann-Elisé Ilema-ILema", 
        cat: "Mysticisme", 
        img: "chienne.png",
        date: "29 mai 2025",
        description: "Les ténèbres de Lekindou nous raconte les faits liés au refus d'obéissance parentale conduisant parfois à une succession de malheurs. Cette œuvre invite à explorer l'univers de la sorcellerie, où la réussite sociale est victime de jalousie et d'hypocrisie, par un mariage non béni par la famille en général et par les parents très proches en particulier. Une situation qui peur être transformée en épreuves ou péripéties douloureuses.",
        ouLeTrouver: "IHEE ( Libreville ) 6000 FCFA" 
    },
    { 
        title: "GHéLONGO ou le remède", 
        author: "Maurice Okoumba-Nkoghe,Efry Trytch Mudumumbula", 
        cat: "Tradition", 
        img: "g.png",
        date: "18 septembre 2021",
        description: "« Ghélongo » en langue puvi dans l'Ogooué-lolo signifie remède. Il relate l'histoire d'une jeune femme dotée de pouvoirs surnaturels. Ce nouvel ouvrage revêt le vif du destin de l'héroïne. Selon le présentateur du livre, il est tout un symbole initiatique et mérite d'être lu.",
        ouLeTrouver: "Amazon 17,20£" 
    },
    { 
        title: "Le mal-être des gabonais", 
        author: "Jean-Claude Mabiala", 
        cat: "Société", 
        img: "mal.png",
        date: "03 avril 2017",
        description: "Dans cet essai écrit sous forme narrative, Jean-Claude Mabiala emmène ses lecteurs dans un voyage deRimouski à Libreville. En sa compagnie, nous découvrons l'atmosphère effervescente de la capitale gabonaise et de ses mapanes , nous sommes témoins de conversations passionnées sur la situation et le devenir du pays, nous explorons différentes problématiques qui portent à réfléchir. Qui est responsable du mal-être vécu par les Gabonais? Quel avenir réservent-ils à leur pays? Quelle place la démocratie occupe-t-elle au Gabon? Quels critères déterminent l'accession d'un Gabonais à un poste de pouvoir? C'est à ces diverses questions que tente de répondre ce plaidoyer en faveur d'un Gabon moderne et responsable. Un texte empreint de sagesse et de sensibilité!",
        ouLeTrouver: "Amazon 9,38£ / Librairies de Libreville" 
    },
    { 
        title: "premières lectures", 
        author: "Justine Mintsa", 
        cat: "Société", 
        img: "lecture.png",
        date: "01 janvier 1997",
        description: "Une jeune fille en école primaire, ayant pour ambition de décrocher en fin d'année son Certificat d'études primaires, fait la connaissance d'un jeune britannique venu dans son village. Ils échangent et apprennent beaucoup l'un de l'autre ; des us et coutumes de leurs pays respectifs. Elle découvre Shakespeare, et lui les soirées de conte autour du feu.",
        ouLeTrouver: "Librairies de Libreville" 
    },
    { 
        title: "La danse de Pilar", 
        author: "Charline Effah", 
        cat: "Société", 
        img: "danse.png",
        date: "25 janvier 2018",
        description: "Au début des années 1980, en Afrique subsaharienne, le destin tragique d'une fratrie prisonnière de la domination de leur mère dirigiste jusque dans les choix, les sentiments et les pensées. Avec en toile de fond, les mouvements propagandistes, les prémices de la démocratie, la famille, l'ambition et l'amour.",
        ouLeTrouver: "Fnac 16.82£/ Amazon 25,75£" 
    },
    { 
        title: "Les portes de la résilience", 
        author: "Stéphane Eya Fils", 
        cat: "Société", 
        img: "porte.png",
        date: "2012",
        description: "Les portes de la résilience se présentent comme l'œuvre inaugurale du jeune écrivain gabonais Stéphane Eya Fils. C'est une œuvre de jeunesse car, comme l'affirme son géniteur, elle a été écrite il y'a une dizaine d'année alors que celui-ci se trouvait encore sur les bancs du lycée. L'œuvre se donne à lire comme le parcours initiatique d'un jeune garçon en bute avec une société en perte de valeur.",
        ouLeTrouver: "Edition Ntsame 8400 FCFA, 12,93£" 
    },
    { 
        title: "Féminin interdit", 
        author: "Honorine Ngou", 
        cat: "Société", 
        img: "ngou.png",
        date: "01 juillet 2007",
        description: "Dzila, quinquagénaire, n'a jamais été père. Il épouse une adolescente et espère avoir un garçon. Mais sa jeune femme accouche d'une fille. C'est la consternation : Dzila rejette tout ce qui est féminin en sa fille et lui donne un nom mixte : Dzibayo. Dzibayo parviendra-t-elle à rendre le féminin permis ? L'auteure nous invite dans un pays de l'Afrique d'aujourd'hui à la rencontre d'une jeune femme dont le destin est tout tracé par les exigences paternelles.",
        ouLeTrouver: "L'Harmattan 27,00£ / Fnac 25,00£ / Librairie.com 27,00£ / Cultura 25,00£" 
    },
    { 
        title: "Guerre de succession au Gabon:Les prétendants", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "succ.png",
        date: "21 septembre 2007",
        description: "La question de la succession ou de la relève, selon l'expression consacrée par le chef de l'Etat gabonais lui-même, Omar Bongo Ondimba, n'est plus taboue car l'idée est dans tous les brain-trust politiques. Tout le monde, à commencer par les pédégistes, semble aujourd'hui convaincu que l'heure de la relève au plus haut sommet de l'Etat a sonné, qu'Omar Bongo Ondimba est plus près de la ligne droite de sortie qu'il ne l'a jamais été. A plus de 70 ans, le chef de l'Etat gabonais, doyen des chefs d'Etats africains, semble fatigué, usé par plusieurs années de pouvoir. Et du coup, sachant que la magistrature suprême n'est pas une course de chevaux, chaque prétendant, dans le plus grand secret, brode, ébauche ou peaufine des plans de carrière. Témoin de la vie politique gabonaise, Janis OTSIEMI nous livre dans cet essai une galerie de portraits d'une vingtaine de personnages politiques susceptibles de succéder à Omar Bongo Ondimba. Préface : [...] Le livre de Janis Otsiemi n'est pas un panégyrique ni un pamphlet contre un personnage quelconque de la comédie politique gabonaise. Cette équivoque levée, on voit donc assez clairement quelle est l'inclinaison de cet essai. À mi-chemin entre un trombinoscope et un who's who, ce livre est une sorte de catalogue qui dresse le pedigree d'une brochette de ces personnages qui  font et défont  l'actualité politique de notre pays. C'est comme tel qu'il faut le lire, au-delà des insuffisances, des lacunes qu'on pourrait y relever. ",
        ouLeTrouver: "Librairie Mollat Bordeaux 13,50£ / Amazon 2000£/ Fnac" 
    },
    { 
        title: "Victime de l'ombre", 
        author: "Maurice Okoumba-Nkoghe et Hermine Ekeng Mba", 
        cat: "Société", 
        img: "victimede.png",
        date: "2026",
        description: "Suivez au fil des pages le cheminement d'une jeune protagoniste confrontée au mystère de son ascendance. Bercée par l'affection d'Alloume, figure maternelle de substitution, elle aspire à percer le secret de son père absent. Mais cette recherche de vérité, encouragée par Alloume, n'est pas sans risque. Les révélations pourraient-elles ébranler l'équilibre fragile de son existence?",
        ouLeTrouver: "Edition CLE 6000 FCFA" 
    },
    { 
        title: "Les âmes se consument en silence", 
        author: "Rodolphe Ndong Ngoua", 
        cat: "Société", 
        img: "consume.png",
        date: "04 décembre 2020",
        description: "À Bouboulango, le père d'Ossong-Minfoul décède brutalement alors qu'il vient d'être nommé aux plus hautes fonctions de l'État. Le jeune homme va mener l'enquête au péril de sa vie. La vérité qu'il découvre marque un tournant dans sa vision de sa terre natale et du régime au pouvoir. Lui-même et les siens en sont pourtant de fervents partisans. Face aux forces de l'ordre et aux maitres du savoir, il engage, avec ses camarades, une lutte inégale pour la justice sociale. II se retrouve alors face à une double option : se consumer en silence ou prendre le chemin de l'exil.",
        ouLeTrouver: "L'Harmattan 21,00£ / Amazon 21,00£ / Cultura 21,00£" 
    },
    { 
        title: "Chroniques du Gabon", 
        author: "Julien Fortin", 
        cat: "Société", 
        img: "fortin.png",
        date: "20 octobre 2009",
        description: "Direction Lambaréné, Gabon : entre le fleuve et la forêt vierge... Voyage au coeur du patchwork africain. Car c'est bien d'un patchwork dont il s'agit : y sont cousus pêle-mêle des traditions ancestrales et des préoccupations modernes, de l'envie et de la fierté face à l'Occident, des visages et des ethnies, des coutumes et des combats, des rires et des larmes... Le voyage est toujours vivant, comme une danse gaie et désespérée, dans ce pays fascinant que l'auteur aborde sans complaisance. Son texte ausculte la complexité du Gabon, à la fois nu et inaccessible, unique et multiple - et délivre une part de vérité sur un coin du continent africain qui pourrait bien, au fil des anecdotes et des rencontres, nous donner quelques belles leçons de sagesse et d'humilité...",
        ouLeTrouver: " Amazon 15,00£/Maison de la Presse  " 
    },
    { 
        title: "Le plus beau des noms", 
        author: "Edna Merey-Apinda", 
        cat: "Société", 
        img: "leplusbeau.png",
        date: "01 septembre 2015",
        description: "Comment mettre en mots une douleur ineffable, tapie dans vos entrailles, qui vous tient prisonnière d'un rêve inassouvi? C'est teintées d'émotions, de sincérité et de finesse que les quatre plumes réunies dans ce recueil ont tenté d'appréhender cette douleur qu'est la stérilité. Quand le désir, que dire la nécessité d'enfanter, dépassent les bornes du réalisable, il va sans dire que le monde s'en retrouve chamboulé. C'est à juste titre donc, que Lamartine disait: « un être vous manque et tout est dépeuplé ». Il y a des paroles qui à jamais marquent l'esprit en tatouant en lettres indélébiles des mots durs sur le ventre d'une femme. Ces mots, Charline Effah, Miryl Eteno, Muetse-Destinée Mboga et Edna Merey-Apinda les ont apprivoisés pour en faire un chapelet, comme pour dire et rappeler que la vie se greffe là où résiste l'espoir",
        ouLeTrouver: "Amazon 15,00£ / Decitre 15,00£ " 
    },
    { 
        title: "Tu ne perds rien pour attendre", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "perd.png",
        date: "16 mars 2017",
        description: "Flic à Libreville, Jean-Marc a perdu sa mère et sa soeur dans un accident de la route alors qu'il avait douze ans. Le chauffard, fils d'un ministre, n'a jamais été poursuivi. Il est entré dans la police à cause de ce drame....",
        ouLeTrouver: "Amazon 2,30£ / Decitre 15,00£ / Fnac 11,99£ / Google Play Livres 11,99£ " 
    },
    { 
        title: "Fureurs et cris de femmes", 
        author: "Angèle Rawiri", 
        cat: "Drame", 
        img: "fureur.png",
        date: "30 novembre 1989",
        description: "Depuis une dizaine d'années, Emilienne cherche, par tous les moyens, à donner à Joseph, son époux, le fils qu'il désire. Un jour, leur fille unique âgée de douze ans meurt. Meurtrie, Emilienne s'accroche avec une obstination humiliante à un époux très fortement influencé par une mère qui souhaite le voir divorcer et l'incite à vivre avec sa maîtresse. Immensément désespérée, Emilienne se réfugie dans une boulimie et une ivrognerie suicidaires. Entre une visite médicale et des séances de magnétisme, elle échoue, lamentable, dans les bras de sa secrétaire. Elle entretiendra, avec elle, une liaison amoureuse confuse et pleine de risques. Le récit que voici se déroule dans un climat ponctué de doutes déroutants, d'incertitudes dangereuses et de complots qui ébranlent les quatre personnages principaux. D'un bout à l'autre du roman, Emilienne se livre à des monologues poignants, échos et reflets des rapports qui secouent et écartèlent un couple mutilé par l'absence d'enfants, par l'influence négative de la belle-mère et par l'ombre menaçante de la rivale d'Emilienne.",
        ouLeTrouver: " Fnac 18.50£/ Amazon 18.50£" 
    },
    { 
        title: "Sanglotites Equatoriales", 
        author: "Nadia Origo", 
        cat: "Société", 
        img: "sanglot.png",
        date: "24 septembre 2014",
        description: "Dans ce recueil de la contracture au lyrisme spasmodique, l'étalement brisé et vigoureux des monosyllabes évoque, avec l'agencement fracturé des poèmes en prose, une nouvelle théorie du vers libre : faire suivre, après la furie hurlée de chaque pièce, une greffe de la prose pour engager de la sorte, la liberté d'une écriture qui est chant désaccordé de la vaste Nuit équatoriale que la poétesse nomme, d'un vocable nouveau, déshumanisant et pathologisant, la sanglotite.",
        ouLeTrouver: "Librairie Eyrolles 5,00£ / Cultura 5,00£ " 
    },
    { 
        title: "Le cheminement de Ngniamoto", 
        author: "Eric Joel Bekale", 
        cat: "Tradition", 
        img: "ngniamoto.png",
        date: "01 juin 2006",
        description: "C'est le récit de la vie d'un homme, Ngniamoto, et de son destin particulier : les conditions difficiles de sa naissance et la maladie qui contraignit sa mère à quitter le village de son époux, pour aller se réfugier chez son grand frère NzeMeye, un nganga aux pouvoirs illimités. Celui-ci, après avoir guéri l'enfant Ngniamoto, ira le faire initier chez les pygmées. Ce roman épique s'inspire de la tradition orale Fang et, plus particulièrement, de l'épopée Mvett, ou la légende d'un homme aux capacités surnaturelles.",
        ouLeTrouver: "L'Harmattan 15,00£ /Amazon 14,00£ /Africa Vivre 13,30£ / Librest.com 15,00£" 
    },
    { 
        title: "Le cri de la liberté", 
        author: "Douka Zita Alida", 
        cat: "Société", 
        img: "lecri.png",
        date: "Juin 2005",
        description: "Le cri de la liberté est ce vibrant et émouvant appel lancé par une communauté « Le cercle de l'espoir » qui, par ses réflexions existentielles et par son propre art de manier la maïeutique de Socrate, cherche à impulser une nouvelle forme d'existence révolutionnaire, proclamant le retour de toutes les valeurs humaines en crise de nos jours. Critiquant l'état égoiste et individualiste de la structure sociétale actuelle, la communauté cherche à redimensionner le rôle de l'individu et l'importance culturelle d'autrui dans les nouveaux rapports entre états, et, notamment, à l'instar des efforts et de la persévérance de deux adolescents qui vont internationaliser cette nouvelle conception de famille communautarisée où les entraves à la liberté, au droit, a la justice, a l'équité, a la paix et a la solidarité déclinent. Ce qui ne va pas sans générer des réactions virulentes des réfractaires à cette nouvelle organisation de vie.",
        ouLeTrouver: "Fnac" 
    },
    { 
        title: "Anthologie des poètes gabonais d'expression française La Concorde Tome I", 
        author: "Raphaël Misere-Kouka", 
        cat: "Société", 
        img: "tome1.png",
        date: "15 mars 2003",
        description: "Cette première anthologie critique et thématique d'une telle envergure sur le plan national et continental nous offre un regard non exhaustif mais élogieux sur une poésie aux images tantôt pudiques et douces, tantôt farouches et saumâtres, couronnées par une suavité phonique, qui honore la langue de ces multiples auteurs. Un vibrant hommage au Gabon littéraire d'hier et d'aujourd'hui.",
        ouLeTrouver: "Cultura 15,50£ / Librairie Mollat Bordeaux 15,50£ / Amazon 15,50£" 
    },
    { 
        title: "Anthologie des poètes gabonais d'expression française La Concorde Tome II", 
        author: "Raphaël Misere-Kouka", 
        cat: "Société", 
        img: "tome2.png",
        date: "01 janvier 2001",
        description: "Cette première anthologie critique et thématique d'une telle envergure sur le plan national et continental nous offre un regard non exhaustif mais élogieux sur une poésie aux images tantôt pudiques et douces, tantôt farouches et saumâtres, couronnées par une suavité phonique, qui honore la langue de ces multiples auteurs. Un vibrant hommage au Gabon littéraire d'hier et d'aujourd'hui...",
        ouLeTrouver: "Amazon 21,00£ / L'Harmattan 21,00£ / Lalibrairie.com 21,00£" 
    },
    { 
        title: "J'ai résolu de", 
        author: "Nadia Origo", 
        cat: "Société", 
        img: "jai.png",
        date: "15 septembre 2008",
        description: "Aurore est une jeune femme engagée qui s'interroge sur la société dans laquelle elle vit. En posant ses valises côté ville, elle nous fait vivre sa perception entre chic et choc de la vie à Libreville capitale du Gabon, et nous invite à partager cette réflexion sur la ville africaine.",
        ouLeTrouver: "Amazon 12,61£ /Cultura 11,99£ / Librairie Eyrolles 15,17£" 
    },
    { 
        title: "Histoire des Fang, peuple gabonais", 
        author: "Xavier Cadet", 
        cat: "Société", 
        img: "fang.png",
        date: "01 avril 2009",
        description: "Au milieu du XIXè siècle, la France implante au Gabon un comptoir destiné à lutter contre la traite négrière et à développer le commerce atlantique, dont les Fang prennent bientôt le contrôle. Conquérants, envahisseurs, nomades venus du Nil, la rencontre avec les Fang a nourri les théories les plus invraisemblables sur leur mouvement et sur leur origine. La réalité quotidienne, observée pendant près d'un siècle à travers les archives d'Outre-Mer, dissout les mythes et permet d'envisager sous un angle neuf leur histoire ancienne.",
        ouLeTrouver: "L'Harmattan 43,00£ / Fnac 43,00£" 
    },
    { 
        title: "La belle et le diplomate", 
        author: "Eric Joël Bekale", 
        cat: "Drame", 
        img: "belle.png",
        date: "16 mars 2022",
        description: "Ce roman allie rêves, passions et philosophie, en nous faisant partager les réflexions d'un diplomate à propos de son métier, sa famille et ses amours. Écrit à la manière d'un journal intime, La Belle et le Diplomate est l'histoire d'un diplomate passionné de son métier qui souhaite accorder un peu plus de temps à sa famille. Mais, celui-ci est envoyé, de manière impromptue, en mission à Genève. Durant son séjour, il rencontre une femme à la fois charmante et mystérieuse avec laquelle il passe un week-end amoureux. Ce que le diplomate ne sait pas, c'est que sa belle « fiancée » a rendez-vous avec la mort.",
        ouLeTrouver: "Amazon 17,00£/ L'Harmattan 17,00£" 
    },
    { 
        title: "African Tabloid", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "african.png",
        date: "19 septembre 2013",
        description: "Libreville. 2008. Un an avant les élections, un type est retrouvé mort sur une plage de Libreville, près du palais de la présidence de la République, une balle dans la gorge et deux doigts de la main gauche coupés.La victime est un journaliste d’investigation connu pour ses enquêtes très sensibles sur le pouvoir dont il dénonçait la corruption et la main mise sur les affaires du pays. Pour la corporation, la société civile et les associations de défense de la presse, il s’agit là, à l’évidence, d’un assassinat politique.Mais à Libreville, comme partout ailleurs en Afrique, les apparences sont souvent trompeuses.",
        ouLeTrouver: "Fnac 4.70£ / Cultura 5.70£" 
    },
    { 
        title: "Au pays de Mbandong", 
        author: "Eric Joël Bekale", 
        cat: "Tradition", 
        img: "pays.png",
        date: "01 janvier 2001",
        description: "Kémésin, un jeune villageois plein d'ambition travaille très dur à l'école et accède à l'université. Il croit que seul le travail paie. Mais les troubles récurrents sur le campus entraînent des échecs massifs et des exclusions. Il n'y échappe pas et décide de rentrer dans son village. Il va mettre son savoir au service de sa communauté et le succes récompense des efforts.Malheureusement, le commandant de Karang veut récupérer cette réussite pour réaliser ses ambitions égoïstes. Kémésin refuse et se rebelle....",
        ouLeTrouver: "Culture (12,20£ grand format/ 9,49 PDF) / L'Harmattan 12,50£" 
    },
    { 
        title: "L'implantation coloniale au Gabon Tome I", 
        author: "Nicolas Metegue N'nah", 
        cat: "Société", 
        img: "ras.png",
        date: "03 mai 2000",
        description: "",
        ouLeTrouver: "Tamery Sematawy 13,00£ / Amazon 13,00£ /Fnac 13,00£ / Cultura 13,00£" 
    },
    { 
        title: "Le signe de la source", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Mysticisme", 
        img: "source.png",
        date: "mars 2015",
        description: "Malemba mena le Pajero jusqu'au pont de la rivière Abangayo, sous la pluie qui n'arrêtait pas de tomber. - Grande sour, lui dit lyanghi, stoppe la voiture, nous allons descendre. - Tais-toi, peureuse, nous irons ensemble sur l'autre rive. Quand Iyanghi rencontra le regard de Malemba, une terreur sans nom l'envahit : les joues de la grande soeur, à l'ordinaire rondes, avaient déjà perdu de la chair; les cernes sous les yeux s'étiraient démésurement. Sous le pont, Abangayo avait triplé de volume. Malemba jeta le Pajero sur les troncs d'arbre mouillés. Il se passa aussitôt quelque chose de terrible. Malemba fut subitement prise d'une grande agitation; tout se passait comme si un esprit invisible lui disputait le volant. Alors, survint l'irréparable; dans un bruit épouvantable, le véhicule bascula dans le vide. Iyanghi hurla de terreur quand le sang lui monta à la tête. Elle ne vit plus rien. Aucune douleur, seulement un grand remous noir qui tournait avec lenteur et l'entraînait. De très loin, elle entendit comme un cri, puis un autre. Un souffle emplit la terre de musique. Les cris et la musique semblaient interminables, mais c'était désormais sans intérêt pour lyanghi. Elle voulait seulement rester au fond du remous qui se creusait davantage en l'entraînant plus loin. Maurice Okoumba-Nkoghe est de nationalité gabonaise. C'est l'un des écrivains les plus prolifiques de son pays. Le Signe de la source est son cinquième roman.",
        ouLeTrouver: "Fnac 4,49£ " 
    },
    { 
        title: "Le chemin de la mémoire", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Tradition", 
        img: "chemin.png",
        date: "01 janvier 1999",
        description: "Pepo a cru en vain en l'amour d'une Barbadji. Il l'a aimée contre la volonté de la famille ! Et, elle a fini par l'abandonner un jour pour d'autres aventures. Ensuite? est arrivée Tamariva, la douce et tendre, l'arrière-petite-fille indienne. C'est à travers cette toile d'amour qu'Okoumba-Nkoghé s'est ingénié à tracer ¨ le chemin de la mémoire ¨ d'un fils du pays, qui fait référence à la culture ancienne réincarnée dans le Mvett, dans Olendé et dans l'objet d'art, une sculpture mystique qui est? source de tragique mort.",
        ouLeTrouver: "Fnac 20,50£" 
    },
    { 
        title: "Au ras des hommes", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "auras.png",
        date: "08 février 2024",
        description: "À Libreville, heure de pointe, un homme tire à l'arme lourde sur la foule au carrefour Rio avant de tenter de se tuer. Cette tuerie qui fait plusieurs morts plonge la ville dans l'effroi et l'incompréhension. Pour les officiers de police, le capitaine Koumba et son adjoint Owoula, il ne peut s'agir que d'un ancien militaire qui a perdu la tête. Quelques jours plus tard, alors que l'enquête piétine, une autre fusillade éclate... La psychose est à son comble. Koumba et Owoula sont loin de se douter que les deux affaires sont liées et qu'ils vont être l'objet d'une manipulation aux relents politiques sur fond de crise électorale. Janis Otsiemi est de retour dans le paysage littéraire avec un polar inédit. L'ambiance est moite et tendue jusqu'au dénouement.",
        ouLeTrouver: "Amazon 16,00£ / Fnac" 
    },
    { 
        title: "Ma mère se cachait pour pleurer", 
        author: "Peter Stephen Assaghle", 
        cat: "Société", 
        img: "pleurer.png",
        date: "2018",
        description: "Ma mère se cachait pour pleurer est un texte d'une théâtralité incroyable et aux rebondissements inattendus. Dans la tourmente de sa relation amoureuse avec Rita, Fam le héros nous invite non seulement à nous interroger sur la condition de femme au foyer de sa mère, mais également à nous offusquer sur des tabous de notre société tels que les grossesses précoces, les viols en milieu scolaire ou encore l'inceste.",
        ouLeTrouver: "BOOKELIS 10,00£ / Livraddict 10,00£" 
    },
    { 
        title: "Orgie sombre", 
        author: "Maurice Okoumba-Nkoghe et Dja-Tsingue Nzigou", 
        cat: "Mysticisme", 
        img: "orgie.png",
        date: "25 mars 2024",
        description: "Punga est un homme d'affaires qui a réussi. Paga, son épouse, est une gynécologue réputée. Ils filent le parfait amour et font bonne figure au regard du voisinage. Ils ont deux enfants. Le premier est un garçon de vingt ans nommé Diambu. Il a hérité de son père l'élégance vestimentaire et le verbe châtié. Fier de tels atouts, il néglige ses études puisqu'à son âge il n'est qu'en classe de 4e. Passant son temps à frimer, et allant d'une fille à une autre, d'un bal masqué à un autre. Diambu est un vrai jouisseur. Sa petite sœur Muboti, une adolescente de quinze ans au visage d'ange...",
        ouLeTrouver: "Amazon 13,84£" 
    },
    { 
        title: "Autobiographie d'un gabonais, du villageois au ministre", 
        author: "Vincent de Paul Nyonda", 
        cat: "Société", 
        img: "auto.png",
        date: "01 janvier 1994",
        description: "L'auteur raconte sa naissance, son d'un Gabonais du vilageois au ministre enfance dans le milieu coutumier bavarama au Gabon, là où il a fait son apprentissage social. Dès onze ans, il est séduit par le christianisme à travers un pasteur, mais on veut l'initier au Bwiti local et il s'enfuit.",
        ouLeTrouver: "L'Harmattan 20,85£ / Amazon 20,85£" 
    },
    { 
        title: "LONGO", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Société", 
        img: "longo.png",
        date: "22 juin 2022",
        description: "Longo évoque le prototype d'un homme qui a une vie équilibrée et bien remplie. Entre la pratique de la foi chrétienne et la réalité socioculturelle, dans un décor où se côtoient le Bien et le Mal, l'auteur nous plonge dans le choix d'une vie fortement nuancée. Notamment, le projet d'un mariage qui se réalise dans le respect des normes traditionnelles. Toutefois, Longo se heurte à la confiscation des agences des transports par les acteurs politiques en période électorale et est victime d'un accident de la route. Deux faits majeurs qui bouleversent l'organisation du mariage en lieu et dates. Avec foi et détermination, l'évènement est célébré avec succès. Le roman s'achève sur la preuve de la foi qui fait intervenir la justice par la repentance des deux aigris et la mort tragique de deux femmes adeptes de la sorcellerie.",
        ouLeTrouver: "Amazon 10,55£" 
    },
    { 
        title: "Lettre à la jeunesse gabonaise", 
        author: "Marc Mvé Bekale", 
        cat: "Société", 
        img: "lettre.png",
        date: "01 septembre 2011",
        description: "Arrivé au pouvoir grâce à une parodie électorale, Ali Ben Bongo a mis en place une stratégie politique qui consiste à étouffer les voies discordantes, à se servir des forces armées, à vérouiller l'appareil d'Etat, a refuser au peuple gabonais le libre choix de ses dirigeants politiques. Résister à ce régime n'est pas l'affaire d'un jour. Un nouvel ordre devra être arraché par la lutte. L'émergence véritable du Gabon apparaît consubstantielle à la violence.",
        ouLeTrouver: " L'Harmattan 8,00£ / Decitre 8,00£" 
    },
    { 
        title: "TSENGUE", 
        author: "Helia Ndossy", 
        cat: "Tradition", 
        img: "tsengue.png",
        date: "2025",
        description: "Tsenguê  est une oeuvre qui plonge le lecteur au coeur des questionnements liés à l'identité culturelle, un thème particulièrement pertinent dans le contexte actuel. A travers une série de nouvelles poignantes, Helia NDOSSY explore les dynamiques de la culture et les défis auxquels sont con frontées les individus dans leur quête d'identité. Son écriture, à la fois sensible et engagée, témoigne d'une profonde réflexion sur les racines culturelles et les valeurs humaines .",
        ouLeTrouver: "Librairies de Libreville " 
    },
    { 
        title: "Mariage et violence dans la société traditionnelle fang au Gabon", 
        author: "Honorine Ngou", 
        cat: "Société", 
        img: "mv.png",
        date: "01 juin 2007",
        description: "Le mariage est un engagement solennel qui nécessite le consentement de l'homme et de la femme. Cependant, dans bon nombre de sociétés anciennes des cinq continents, on ne le considérait pas souvent comme un acte volontaire qui engageait deux personnes, mais comme l'alliance de deux familles. Cet ouvrage associe deux notions diamétralement opposées et montre le préjudice causé à de toutes petites filles mariées de force à des hommes âgés. Il permet également de voir l'évolution dans les mentalités et les pratiques concernant le mariage de la jeune fille fang.",
        ouLeTrouver: "Amazon 23,00£ / Fnac 23,00£ / Cultura 16,99£" 
    },
    { 
        title: "Coeur brisé", 
        author: "Maurice Okoumba-Nkoghe et Hermine Mbana", 
        cat: "Société", 
        img: "coeur.png",
        date: "13 novembre 2023",
        description: "Dans cette fiction, Nanga est Sambhat Albert-Martin, et Ngondi est sa troisième et dernière épouse. Ils s'aiment, mais le grand âge du garçon et la petite écolière ne peuvent rien faire ensemble, sinon attendre. C'est à cet instant précis qu'il est envoyé à Mouila, chez un parent disposant de solides attaches. Nanga reprend ses études, passe le concours qu'il gagne haut la main et devient un instituteur accompli avec deux femmes. Ngondi, écolière moyenne et plusieurs fois malade, doit à son tour rallier Mouila, chez un oncle fortuné, mais dont la femme est stérile. Dans cette belle aventure, celle-ci prend l'adolescente comme sa propre fille et l'initie à la comptabilité. C'est donc l'histoire de ce patriarche que sa petite-fille et moi avons mise assez fidèlement en roman, afin que nul ne l'ignore.",
        ouLeTrouver: "Amazon 15,64£ " 
    },
    { 
        title: "Lire, le propre de l'homme", 
        author: "Rodrigue Ndong", 
        cat: "Société", 
        img: "lire.png",
        date: "02 juillet 2019",
        description: "Lire, certainement l'un des actes les plus communs et des plus délicats de l'homme. River ses yeux sur des signes graphiques en vue d'un déchiffrement pour parvenir au sens et à la signification, voilà une activité qui mobilise, et le corps, et l'esprit. Mais qui commande aussi d'avoir un environnement approprié et une période plus ou moins spécifique pour se réaliser, tout demeurant relatif en ce domaine, naturellement. Mais lire, c'est aussi une manière de se tenir devant un livre, de le humer, de le toucher, d'en tourner les pages, de le charger de son écriture ou de l'abîmer. Lire, c'est également une manière de progresser dans son déroulé des phrases, des paragraphes, des chapitres, des parties, par sauts et gambades, tout comme lire c'est encore fréquenter plusieurs livres à la fois...",
        ouLeTrouver: "Amazon 11,00£ / Cultura 11,00£ / Librairie La Procure 11,00£" 
    },
    { 
        title: "OLENDE une époque du Gabon", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Société", 
        img: "olende.png",
        date: "01 janvier 1985",
        description: "",
        ouLeTrouver: "L'Harmattan 13,00£" 
    },
    { 
        title: "Neuilly sur Kin", 
        author: "Lydie Stéphanie Mamiaka", 
        cat: "Amour", 
        img: "kin.png",
        date: "avril 2025",
        description: "Le roman raconte l'histoire de Pierre-Henri, un jeune aristocrate qui fait une rencontre improbable. Il tombe sous le charme de Yaya, une jeune femme haute en couleur, originaire de d'Afrique, aux antipodes de son univers social. La rencontre entre Yaya et la famille de Pierre-Henri provoque une série d'évènements et de quiproquos dignes des plus grands vaudevilles français.",
        ouLeTrouver: "Amazon 5.63£" 
    },
    { 
        title: "Un mille-pattes dans la tête", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Mysticisme", 
        img: "mille.png",
        date: "29 mai 2024",
        description :"Dans une Afrique centrale empreinte de mystères et de traditions, voici l'histoire vraie de Ngone, une jeune fille qui est envoyée par sa mère Nkar vivre avec sa grand-mère Mekongo, où elle travaille durement dans les champs. Sa vie est marquée par des épreuves terribles: une femme malveillante lui met un millepattes dans la tête, une éruption cutanée soignée par des guérisseuses, des accusations de sorcellerie, et une grossesse à 15 ans. Malgré tout, Ngone trouve un soutien précieux auprès de son grand-père Ngola et de son petit ami Nze, qui l'aident à naviguer à travers ces défis. Malgré ses nombreuses souffrances, incluant une mystérieuse maladie et la naissance d'un enfant malade, Ngone cherche réconfort et guérison dans la foi et le soutien spirituel. Après un périple spirituel, elle s'éloigne de sa famille hostile et rejoint une communauté religieuse. L'histoire de Ngone nous enseigne que la force et la résilience face à l'adversité, alliées à l'amour et à la foi, peuvent surmonter les obstacles les plus difficiles, offrant ainsi une lumière d'espoir et de paix intérieure.",
        ouLeTrouver: "Amazon 10,55£ " 
    },
    { 
        title: "Une âme aux enchères", 
        author: "Muetse-Destinée Mboga", 
        cat: "Société", 
        img: "ame.png",
        date: "01 décembre 2006",
        description: "Antoine est un jeune homme de bonne famille bien parti pour réussir sans avoir besoin de se compromettre. Mais lorsqu'il rencontre Jocelyne, l'unique fille de Paulette Iwenga, une dame de fer dont le seul objectif dans la vie est d'amasser le plus de biens matériels possible et ce qu'importe le prix, son destin va basculer....",
        ouLeTrouver: "fnac 15,00£ / Amazon 15,00£ /Contact: (+241) 62795771" 
    },
    { 
        title: "Rites initiatiques gabonais à la rencontre de l'évangile", 
        author: "Simon-Pierre Mvone-Ndong", 
        cat: "Société", 
        img: "evangile.png",
        date: "01 mai 2020",
        description: "Constatant, en 1994, les limites pédagogiques de la première évangélisation des peuples du Gabon, l'abbé Noël Ngwa-Nguéma a publié en l'an 2000 : Rites Initiatiques Gabonais à la rencontre de l'Évangile. Son intention était de provoquer un débat théologique dans l'Eglise, mais il s'est heurté alors à l'hostilité du Renouveau charismatique et à une part très grande du clergé. Où en sommes-nous après 20 ans ? Quelle est la place de la culture gabonaise dans la liturgie et dans la marche du peuple de Dieu au Gabon ?",
        ouLeTrouver: "L'Harmattan 29,00£ / Amazon 29,99£ / Les impliqués Editeur 21,99£" 
    },
    { 
        title: "BIBOUBOUAH: chroniques équatoriales suivi de bourrasque sur MITZIC", 
        author: "Ferdinand Allogho-oké", 
        cat: "Société", 
        img: "bibou.png",
        date: "01 janvier 1985",
        description: "",
        ouLeTrouver: "L'Harmattan 11,50£ / Maison de la Presse 18975 FCFA" 
    },
    { 
        title: "L'ile aux tisserins", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Société", 
        img: "ile.png",
        date: "29 mai 2024",
        description: "L'Ile aux tisserins est un roman captivant qui suit Mvé, Afang et Katuma, trois amis ayant étudié la médecine en Chine, de retour à Mayi pour ouvrir une clinique dans un système de santé corrompu et inefficace. Leur clinique prospère grâce à des soins de qualité et abordables. Le roman explore également les traditions funéraires de l'île, notamment les funérailles célébratoires des chefs de village, et les défis émotionnels et spirituels qu'elles impliquent. Katuma entame une relation amoureuse avec Imya, une jeune femme dont la famille s'oppose à leur union en raison de différences culturelles et religieuses. À travers ces histoires, le roman aborde les conflits entre coutumes traditionnelles et valeurs modernes, ainsi que les luttes pour la justice sociale dans une société en rapide évolution, offrant une perspective riche sur la culture et les relations humaines à Mayi.",
        ouLeTrouver: "Amazon 10,55£" 
    },
    { 
        title: "Un jubilé pour Pépé", 
        author: "Maurice Okoumba-Nkoghe", 
        cat: "Société", 
        img: "pepe.png",
        date: "décembre 2014",
        description: "Un jubilé pour Pépé est un texte incroyable qui ne laissera personne indifférent. Car, hormis la dimension autobiographique, l'auteur donne un véritable cours sur le manichéisme de la vie...   Deux figures antithétiques se coudoient : la force du Bien et celle du Mal. Lumière contre Ténèbres. Et l'homme, par elles manipulé, doit opérer des choix qui feront de lui Ange ou Démon.  «Et Pépé dans tout ça ?» se demandera-t-on. C'est effectivement ce que le lecteur est appelé à découvrir dans cette fiction rédigée de mains de maître par celui qui n'est plus à présenter.",
        ouLeTrouver: "Amazon 10,55£ " 
    },
    { 
        title: "Histoire sombre de mon pays", 
        author: "Jean Paul Obounou Eyi", 
        cat: "Société", 
        img: "hs.png",
        date: "15 avril 2024",
        description: "La résistance au Gabon de la fin des années d'esclavage et au début de l'annexion des terres gabonaises par les puissances occidentales en tête desquelles la France et l'Allemagne a été des plus désagréables de l'histoire de ce pays. L'espoir renaît dans ce pays d'Afrique centrale, après la fin d'un régime de plus d'un demi-siècle longtemps soutenu par les occidentaux au profit de leurs intérêts, par le Général de Brigade Brice Clotaire OLIGUI NGUEMA, l'homme fort du 30 août 2023. Cet ouvrage est un résumé de l'histoire des vaillants guerriers du Gabon longtemps racontée par plusieurs écrivains et narrateurs gabonais. La particularité de ces fils du pays est qu'ils sont tous animés par l'esprit d'héroïsme qui coule dans leurs veines.",
        ouLeTrouver: "Librairies de Libreville/ Fnac 5,99£ / Les Libraire 8,99£" 
    },
    { 
        title: "Le panier", 
        author: "Yman Ngari", 
        cat: "Amour", 
        img: "panier.png",
        date: "31 mai 2017",
        description: "Charnelle, jeune gabonaise, mène une adolescence paisible à Libreville jusqu'au jour où un événement dramatique vient bouleverser sa vie. Et pourtant, cet incident va la pousser dans les bras de Pierre Mengone, son âme sœur. Grâce à son amour et soutien indéfectibles, la jeune femme va braver tous les obstacles et leur fusion va engendrer, quelques années plus tard, la naissance de leurs deux enfants. Mais leur déménagement à Franceville va venir briser leur idylle irréprochable : les deux amoureux rencontreront une crise conjugale. Au fur et à mesure que la situation se dégradera, Charnelle se rendra compte de l'importance des conseils que sa mère lui prodiguait à propos du panier. Mais ces conseils l'aideront-ils pour autant à tourner la page ?",
        ouLeTrouver: "Amazon 8,00£" 
    },
    { 
        title: "Contes gabonais", 
        author: "André Raponda-Walker", 
        cat: "Société", 
        img: "contesg.png",
        date: "05 novembre 2001",
        description: "André Raponda Walker est allé recueillir ces contes directement auprès des conteurs traditionnels du Gabon. Ils représentent un large échantillonnage des différentes régions de ce pays. Les animaux parlent, les morts ressuscitent, les sorciers et les esprits secourent ou attaquent les héros...",
        ouLeTrouver: "Amazon 65,00£" 
    },
    { 
        title: "Escapade mortelle", 
        author: "Muetse-Destinée Mboga", 
        cat: "Mysticisme", 
        img: "mort.png",
        date: "19 janvier 2019",
        description: "Lorsqu'Eliwa convainc son frère Bika de les inclure, son amie Ilama et elle, dans l'expédition qu'il a préparée pour découvrir les parcs nationaux de l'est du pays, elle est loin d'imaginer le bouleversement que va provoquer ce voyage dans sa vie. Alors que l'arrivée dans la ville de Makokou se déroule sous les meilleurs auspices, très vite, des faits étranges vont recouvrir l'aventure de mystère. Aurait-elle dû tenir compte des mises en garde d'un fou lucide et d'une petite fille monstre ? Peut-être, mais elle ne l'a pas fait. Et quand Alain, un des membres du groupe, disparaît étrangement dans les eaux de l'Ivindo, elle regrette.Hélas, il est déjà trop tard…",
        ouLeTrouver: "Amazon 18,00£ /Fnac 18,00£/ Cultura 9,90£/Maison de la Presse 18975 FCFA" 
    },
    { 
        title: "Peau de balle", 
        author: "Janis Otsiemi", 
        cat: "Société", 
        img: "peau.png",
        date: "01 décembre 2007",
        description: "« Peau de balle » commence sous les chapeaux de roue. Un quatuor de délinquants librevillois, nourris au lait de largent facile, kidnappent la fille d'un notable et réclament une rançon de cinquante millions. Écrit dans une langue qui claque comme des coups de lanière, Peau de balle se révèle au final un polar original qui tiendra le lecteur en haleine jusqu'au bout. On s'attache vite aux destins croisés des héros et on suit avec passion l'enquête menée par les flics de la PJ locale.",
        ouLeTrouver: "Amazon 2000£ / Librairie Mollat Bordaux 19,27£ /Maison de la Presse 9000 FCFA" 
    },
    { 
        title: "Le fils de l'autre", 
        author: "Jean François Moukagni", 
        cat: "Société", 
        img: "autre.png",
        date: "Mars 2018",
        description: "Le roman Le fils de l’autre raconte l’histoire de Mbouélili, un enfant rejeté par son beau-père Imbabou, devenu violent et alcoolique après avoir épousé sa mère. Victime d’injustice et de maltraitance, Mbouélili est chassé de chez lui.",
        ouLeTrouver: "MAGALI (LA MAISON GABONAISE DU LIVRE)" 
    },
    { 
        title: "Le choix des ancêtres", 
        author: "Thierry Afane-Otsaga", 
        cat: "Mysticisme", 
        img: "lechoix.png",
        date: "01 janvier 2011",
        description: "Le pouvoir, toujours le pouvoir et encore le pouvoir. C'est la lutte pour ce pouvoir qui va engendrer un conflit fraticide entre Angougang et Mfougang deux chefs de tribus influents du pays Ngang. Après la mort de leur dernier chef, le Conseil des sages avait décidé de confier la chefferie à la descendance d'Angougang, mais cette décision n'était pas du goût de Mfougang qui estimait que c'était à sa famille que revenait le droit d'assumer cette responsabilité. Pour avoir gain de cause, chaque camp va s'organiser pour se faire des alliés et combattre l'autre aussi bien physiquement que mystiquement. Sentant que la situation était en train de conduire le pays dans le chaos, les femmes de Ngang, avec à leur tête Nkogang, vont mettre en place une stratégie astucieuse pour mettre fin au conflit. Vont-elles réussir leur pari ?",
        ouLeTrouver: "Librairies de Libreville / GIPA 7100 FCFA" 
    },
    { 
        title: "Les tribus du Gabon", 
        author: "André Raponda-Walker", 
        cat: "Société", 
        img: "tribus.png",
        date: "01 janvier 1993",
        description: "ublié en 1924 dans le Bulletin de la Société des Recherches Congolaises, les Tribus du Gabon est le premier ouvrage sérieux écrit à l'époque. Il reste encore le livre de chevet de tout historien qui veut parler de l'Afrique Centrale et du Gabon en particulier.Mgr Raponda-Walker fait mentir l'adage qui veut que nul ne soit prophète en son pays. Son livre « Notes d'histoire du Gabon » ne contredit pas en 1960 ce qu'il écrivait quarante ans plus tôt. Les rapprochements, les comparaisons, les similitudes de phonèmes sont à l'origine de ses déductions. On dirait que les peuples se déplacent au gré de sa plume. Il est encore impossible aujourd'hui de combler certaines lacunes et d'écrire tous les « pleins » de l'histoire des tribus du Gabon. Mais Mgr Raponda-Walker utilise tous les paramètres mis à sa disposition ; il écoute les anciens dans les villages, il décortique les idiomes et les dialectes, il compulse les documents les plus divers et les récits les plus pittoresques des pionniers du XIXe siècle : il aime sa terre natale et tous ceux qui y habitent : bref, il nous laisse un travail qui servira encore longtemps de référence.",
        ouLeTrouver: "Amazon 6,49£ " 
    },
    { 
        title: "Le mystère de Nguema", 
        author: "Eric Joël Bekale", 
        cat: "Mysticisme", 
        img: "nguema.png",
        date: "01 septembre 2005",
        description: "Voici un ensemble de textes qui nous plonge dans une atmosphère de mystère, pour les uns, dans la vie quotidienne de Libreville, pour les autres. A l'exemple du Mystère de Nguema, la nouvelle qui donne son titre au livre, les dimensions du réel et de l'irréel se confondent et nous entraînent dans une confusion à nous faire sombrer dans la démence. En effet, comment savoir de Nguema, l'époux exemplaire, ou de Rose, l'épouse contrariée, qui est le Revenant ou pas?",
        ouLeTrouver: "L'Harmattan 13,00£/ Fnac 13,00£ / Amazon 13,00£ /Maison de la Presse 10000 FCFA" 
    },
    { 
        title: "La sève du feuillage", 
        author: "François Allogo Ovono", 
        cat: "Poésie", 
        img: "seve.png",
        date: "01 septembre 2008",
        description: "Je pense toujours à cette enfance opportune Et lointaine qui, entre mes doigts, a filé Belle comme dans les contes de fées Mon pauvre c ur vieillot a beau poussé des [cris Dans un immense désert et animé la galerie... Pour rechercher en vain Quelque chose comme levain Pour relever ces moments de joie indélébiles De cette misérable vie de plus en plus mobile » Construits autour du thème de la nature, les poèmes de François Allogo Ovono racontent un rythme et un monde. Ou plus exactement, ils décrivent un monde tel que l auteur ose le rêver, un monde où la nature est honorée et respectée.",
        ouLeTrouver: "Amazon 16,99£ / Institut français ( Libreville)/ Maison de la Presse 10000 FCFA" 
    },
    { 
        title: "ESSOLA", 
        author: "Alban Désiré Afene", 
        cat: "Tradition", 
        img: "essola.png",
        date: "01 septembre 2009",
        description: "Dans le petit village d'Afipe, à quelques kilomètres de la ville de Lambaréné, le monde s'effondre pour Essola FANE, une jeune fille de 18 ans, lorsque sa mère décède soudainement et de manière étrange. Sur son lit de mort, cette dernière lui fait des révélations qui l'intriguent et qui bousculent ses croyances et sa conscience de fervente catholique. Livrée à elle-même, Essola est partagée entre sa foi chrétienne et le chemin obscur que lui indiquent de prendre les épreuves qu'elle traverse. L'auteur aborde le délicat problème de la double identité religieuse et spirituelle que la plupart des pays colonisés par les missionnaires chrétiens vivent aujourd'hui comme un mal.",
        ouLeTrouver: "Amazon 27,50£ /L'Harmattan 20,99 PDF 27,50 grand format/ Fnac 27,50 / Maison de la Presse 29975 FCFA" 
    },
    { 
        title: "Arts premiers du Gabon", 
        author: "Robert Orango-Berre", 
        cat: "Société", 
        img: "art.png",
        date: "01 janvier 1998",
        description: "Un ouvrage de référence de Robert Orango-Berre qui explore l'héritage sculptural gabonais. À travers l'analyse de masques et de statues emblématiques, ce livre dévoile la richesse artistique et la profondeur spirituelle des traditions Fang, Kota ou encore Punu.",
        ouLeTrouver: "Amazon 2000£" 
    },
    { 
        title: "La malédiction de la côte", 
        author: "Bellarmin Moutsinga", 
        cat: "Drame", 
        img: "cote.png",
        date: "01 janvier 2009",
        description: "Six nouvelles hallucinantes sur les thèmes de la révolte, de la solitude de l'être livré à lui-même, mais aussi de l'amour impossible et de la quête effrénée de la terre mère. L'auteur a entrepris d'écrire la profondeur des blessures intérieures des personnages qui ont un jour perdu le lien fragile qui les unissait à la société des hommes.",
        ouLeTrouver: "Fnac 12,00£/ L'Harmattan 12,00£/ Maison de la Presse 18000 FCFA" 
    },
    { 
        title: "Le chant de ma mère", 
        author: "Eric Bekale", 
        cat: "Poésie", 
        img: "chant.png",
        date: "01 mai 2007",
        description: "Certains peuples africains utilisent toujours l'oralité, la parole des sages, pour transmettre un savoir certain aux générations présentes et futures. Les poèmes de ce recueil, inspirés par le Sacré africain, rendent hommage à toutes les femmes, et à la mère d'Eric Joël Békalé en particulier, en nous transportant dans l'univers de la plante Iboga, pour explorer l'âme humaine.",
        ouLeTrouver: "L'Harmattan 11,00£ / Fnac 11,00£ /Amazon 11,00£/ Maison de la Presse 7500 FCFA" 
    },
    { 
        title: "Le chant de ma mère II", 
        author: "Eric Bekale", 
        cat: "Poésie", 
        img: "chant1.png",
        date: "08 novembre 2015",
        description: "Le poète rend, ici, hommage à toutes les femmes en général, et à sa mère en particulier, en nous transportant vers son pays, mais aussi, plus loin dans l'univers de l'Iboga, pour explorer l'âme humaine. Ses poèmes sont des chants, des musiques, des tableaux inspirés par le Sacré africain.",
        ouLeTrouver: "L'Harmattan 12£ / Cultura 19,99£/ Maison de la Presse 10000 FCFA" 
    },
    { 
        title: "Le prix de la liberté", 
        author: " Noël-Aimé Nguema", 
        cat: "Société", 
        img: "prix.png",
        date: "01 février 2007",
        description: "",
        ouLeTrouver: "L'Harmattan 9,99£ / Leslibraire.fr 14,00£" 
    },
    { 
        title: "Cantiques de l'éxil", 
        author: "Honoré Ovono Obame", 
        cat: "Drame", 
        img: "exil.png",
        date: "17 juin 2014",
        description: "Face à une réalité poignante surtout occasionnée par l'exil, est né un poète venu nous raconter sa douleur. L'ensemble des textes de cet ouvrage renvoie à des tableaux assez mélancoliques, et l'écrivain y donne à voir l'exil comme le moment de tous les souvenirs. Ainsi son village natal lui manque. De même que tous ces êtres aimés, dont certains ont déjà, malheureusement, traversés la barrière... Au-delà de la douleur, il y a une sorte d'enfantement. Car, finalement, les Cantiques de l'éxil sont un hymne à la vie, à l'espoir.",
        ouLeTrouver: "Cultura 18,00£ / Fnac 18,00£ / Libraire Eyrolles 18,00£" 
    },
    { 
        title: "L'Ogooué au fil du temps", 
        author: "Alfred Sambo da Silva", 
        cat: "Poésie", 
        img: "ogooue.png",
        date: "août 2009",
        description: "Ah Oui ! Oui !Grand père, je me souviens de toi Me demandant de voir l'invisible, D'écouter le silence nocturne de l'Ogooué, De saisir l'air et le transformer en musique, De dévier la trajectoire de l'oiseau Du ciel avec le seul regard ; De ramper aussi vite qu'un serpent A même le sol.(.) Extrait du poème Au son du Ngombi.",
        ouLeTrouver: "Fnac" 
    },
    { 
        title: "L'autre femme de mon mari ou la conjugalité dédoublée au Gabon", 
        author: "Philippe Nkoma Ntchemandji", 
        cat: "Société", 
        img: "conjug.png",
        date: "16 juin 2021",
        description: "Ce livre procède à l’analyse des cadres culturels et sociaux de l’extraconjugalité durable au Gabon. En s’appuyant, d’une part, sur une recension extensive d’archives judiciaires des tribunaux, l’auteur déconstruit l’extraconjugalité durable gabonaise en deux étapes. La première s’interroge sur la nette dissociation pratique entre légitimation coutumière et légalité inférée par le Code gabonais civil, sur la conjugalité, observant la prévalence de la première sur la dernière. La seconde étape approfondit l’analyse des « cadres de légitimité propres » (ou subculture) des acteurs extraconjugaux au point de pouvoir exprimer l’extraconjugalité durable en termes de « quasi-conjugalité », où seulement l’homme entretient deux femmes, non le contraire",
        ouLeTrouver: "L'Harmattan 23,00£ /Maison de la Presse 35000 FCFA " 
    },
    { 
        title: "Afép L'étranger séducteur", 
        author: "Honorine Ngou", 
        cat: "Société", 
        img: "afep.png",
        date: "01 novembre 2010",
        description: "Reine de l'insondable forêt équatoriale, l'afép ou figus étrangleur est une liane épineuse à la racine phénoménale et toxique. Elle se nourrit de lla sève des plantes alentouret les tue. Le deuxième roman d'Honorine Ngou est une transposition allégorique des caractéristiques perverses de cette épine et retrace la vie d'un homme Afép, sexagénaire hanté par un inextinguible désir de puissance",
        ouLeTrouver: "Cultura 23£ / Amazon 23£ / Maison de la Presse 32975 FCFA" 
    },
    { 
        title: "Nouvelles affaires africaines: Mensonges et pillages au Gabon", 
        author: "Pierre Péan", 
        cat: "Société", 
        img: "pean.png",
        date: "29 octobre 2014",
        description: "En 1983, Pierre Péan publie Affaires africaines sur le rôle de ce qu'on appelle la Françafrique dans l'« émirat noir » regorgeant de pétrole, dominé par le groupe Elf. Le scandale créé par le livre vaut à son auteur menaces de mort, attentat à son domicile, et la rancour d'Omar Bongo, « papa » indéboulonnable de son pays pendant quarante ans, témoin des relations incestueuses entre l'ex-colonie et Paris, notamment des subsides versés par le potentat de Libreville aux partis et au personnel politique de la métropole. Vers la fin de son règne, Bongo fait savoir à Péan que, le temps ayant fait son œuvre, il aimerait lui laisser son témoignage. Ce livre-là ne se fera pas, Bongo mourant en 2009. Mais Péan avait déjà pu glaner assez de confidences pour amorcer le présent ouvrage, entre autres sur les débuts de règne calamiteux du successeur d'Omar, Ali Bongo. Accusations de corruption, de détournement de fonds publics, d'assassinats, d'élections truquées avec la complicité de Paris, de « biens mal acquis » en France et ailleurs, de folie des grandeurs : tel est le bilan catastrophique du pouvoir gabonais.",
        ouLeTrouver: "Amazon 26,00£ /Maison de la Presse 39000 FCFA" 
    },
    { 
        title: "Ceci n'est pas l'Afrique", 
        author: "Anne-Cécile Makosso Akendengue", 
        cat: "Société", 
        img: "af.png",
        date: "01 avril 2010",
        description: "L'auteur nous parle ici de ses vingt ans passés au Gabon. Sans nostalgie et parfois avec humour, elle s'exprime sur ce qui l'entoure, s'attardant sur des vues du pays, des situations souvent surprenantes, la vie de tous les jours, loin de certains clichés habituels.",
        ouLeTrouver: "Amazon 14,50£ / L'Harmattan 14,50£ / Maison de la Presse 21750 FCFA" 
    },
    { 
        title: "Le voleur de rêves", 
        author: "Eric Joël Békale", 
        cat: "Société", 
        img: "vol.png",
        date: "01 septembre 2003",
        description: "Ces contes nous ramènent à nos origines, à l'époque très lointaine où les hommes, les animaux, les arbres et les dieux vivaient ensemble. Cette cohabitation, dans bien des cas, ne se passait pas sans difficulté. Les uns utilisaient les autres pour conforter leurs pouvoirs, naturels ou magiques.",
        ouLeTrouver: "Fnac 11,00£ /L'Harmattan 11,00£/ Maison de la Presse 7500 FCFA" 
    },
    { 
        title: "Le chant de l'aube", 
        author: "Bellarmin Moutsinga", 
        cat: "Société", 
        img: "chanta.png",
        date: "01 décembre 2008",
        description: "Dans le prolongement des Equatoriales, l'auteur nous livre ici, la vision chaotique et tourmentée d'une terre devenue, tout à coup, un univers mystérieux vêtu de foudres et de tonnerres/l'air de rien, un monde soudain vide de signification. C'est un lyrisme exacerbé par un onirisme exigeant, la perte des espaces désormais défigurés, par les modalités apocalyptiques de l'insaisissable, et qui parlent maintenant un langage de folie, de chaos, de vide et de deuil.",
        ouLeTrouver: "Fnac 16,50£ / L'Harmattan 16,50£ grand format, 11,99 PDF / Amazon 16,50£" 
    },
    { 
        title: "Patrimoine II", 
        author: "Lucie Mba", 
        cat: "Société", 
        img: "2.png",
        date: "Mars 2018",
        description: "Une plume acérée qui décrit les maux de notre société avec une sincérité bouleversante. Un cri du cœur pour le changement.",
        ouLeTrouver: "Toutes les bonnes librairies" 
    },
    { 
        title: "La reine Ngalifourou souveraine des Téké", 
        author: "Eugénie Mouayini Opou", 
        cat: "Société", 
        img: "reine.png",
        date: "17 octobre 2012",
        description: "Ngalifourou a été une Reine à la fois souveraine respectée et mère incontestée. Elle naquit en 1864, fut intronisée Reine et succéda à son époux le Roi Iloo qui, en 1880, signait avec De Brazza le traité qui donna naissance à Brazzaville. Décédée en 1956, la reine Ngalifourou est la mère du peuple téké dont la mémoire restera particulièrement vivace dans l'histoire du Moyen Congo. Ce livre retrace le parcours extraordinaire d'une femme d'exception.",
        ouLeTrouver: " Amazon 15,75£ / Fnac 22,50£" 
    },
    { 
        title: "Bob Marley et la fille du dictateur", 
        author: "Anne Sophie Jahn", 
        cat: "Société", 
        img: "bob.png",
        date: "07 Avril 2021",
        description: "En 1979, après un concert aux États-Unis, Bob Marley rencontre Pascaline Bongo, venue le voir en coulisses. Leur échange inattendu marque le début d’une relation intense et secrète, sur fond de célébrité, de pouvoir et de différences culturelles.De cette rencontre naît une histoire d’amour passionnée, mêlant musique, politique et héritage africain, jusqu’à devenir la dernière grande relation du chanteur.Fruit d’une enquête approfondie, Anne-Sophie Jahn retrace ce récit intime et vibrant, entre confidences et mémoire d’une icône du reggae..",
        ouLeTrouver: "Amazon 20,00£ /Maison de la Presse 24975 FCFA" 
    },
    { 
        title: "Secret de famille", 
        author: "Murielle Mumu", 
        cat: "Société", 
        img: "mumu.png",
        date: "21 septembre 2022",
        description: "Comment parvient-on à survivre lorsque nos douleurs proviennent de notre entourage ?À travers, quatre différentes histoires, quatre personnages féminins, des thèmes de sociétés tels que : l'inceste, la prostitution, la violence conjugale et l'avortement clandestin, sont abordés avec un réalisme saisissant.",
        ouLeTrouver: " Fnac 1£ /Amazon 1£ / librairies de Libreville" 
    },
    { 
        title: "Iboga: Invisible et guérison ", 
        author: "Marion Laval-Jeantet", 
        cat: "Société", 
        img: "iboga.png",
        date: "Mars 2018",
        description: "De plus en plus de voyageurs vont vers les thérapies traditionnelles africaines, alors qu'ils considèrent que les thérapies « psy » occidentales se sont avérées insuffisantes à régler leur mal-être. Ce livre rend compte du phénomène tel qu'il est vécu par les expérimentateurs qui plongent dans les rites initiatiques du Bwiti au Gabon. Rites impressionnants qui proposent aux candidats un voyage dans leur propre existence, et au-delà, au moyen d'un des psychotropes naturels les plus puissants au monde : l'iboga. Ce document, écrit par une universitaire elle-même initiée, décrit de l'intérieur les rituels du Bois sacré, mais surtout analyse les conséquences psychiques de la prise d'iboga. Une racine qui bouleverse la vie entière... Marion Laval-Jeantet est artiste plasticienne, mais également ethnopsychiatre, élève de Tobie Nathan au Centre Georges-Devereux. C'est sous ces deux « espèces » qu'elle a abordé l'univers visionnaire du Bwiti : la publication de cet ouvrage précède de peu celle, chez le même éditeur, de « Voyage en Iboga ». Ce livre richement illustré, accompagné d’un DVD, retrace l’approche artistique qu’a expérimentée le duo Art Orienté objet, dont elle fait partie, à partir de leur initiation au Bwiti.",
        ouLeTrouver: " CENTRITE 14,00£/ librairies de Libreville" 
    },
    { 
        title: "Chambre 117", 
        author: "Pulchérie Abeme Nkoghe", 
        cat: "Drame", 
        img: "117.png",
        date: "27 juin 2013",
        description: "Suite à cette confession, je succombai en dépression en réalisant que toute mon existence avait été bâtie sur du sable mouvant. Mon destin ressemblait à un château tremblant qui risquait à toute conjoncture de perdre pied, et de se réduire en un tas de fracas. Je n'avais pas eu le courage de livrer ce handicap à mes proches, pas même à mes amies si complices. Comment dire à mon entourage que j'avais été victime d'un viol à huit ans, et que par la suite j'ai tout oublié ? Avec quels mots peut-on l'expliquer à ses enfants ? Où trouver le courage d'apprendre à ses amis que l'homme qui a partagé son lit pendant des années, que l'on a tant aimé, fut le diable qui sans vergogne, avait arraché et jeté par-delà les sentiers souillés, l'innocence et la naïveté d'une petite fille ?",
        ouLeTrouver: "Amazon 2000£" 
    },
    { 
        title: "Notre frère et ami le caméléon", 
        author: "Léonnard Makosso-Akendengué", 
        cat: "Société", 
        img: "came.png",
        date: "04 avril 2016",
        description: "Tout le monde connait les dons du caméléon. Mais c'est aussi un animal maléfique. On s'en souviendra lors de son procès après la destruction du Boeing -œuvre de terroristes islamistes impliquant le copilote, neveu de Jean de Dieu caméléon - qui a plongé la famille royale et le royaume d'Orembo dans le deuil. Tout cela finira par le massacre de la cour et des populations ayant assisté à ce procès rocambolesque, à l'exception de maître Gédéon. Ce dernier vivra des aventures rocambolesques qui sont racontées dans ce livre avec beaucoup de verve et de saveur.",
        ouLeTrouver: "Amazon 18,50£ /Cultura 18,50£" 
    },
    { 
        title: "A contre-courant", 
        author: "Murielle Mumu", 
        cat: "Amour", 
        img: "contre.png",
        date: "05 Janvier 2023",
        description: "Oyane est une jeune femme au tempérament calme et timide, fille de pasteur et issue d'une famille riche, tout semblait pourtant lui sourire, jusqu'à ce qu'elle fasse la rencontre de Yessi.Vendeur ambulant le jour et étudiant le soir, Yessi vit très loin des quartiers chics, il se démène à réussir dans un bidonville qui constitue son univers. Lorsque le destin mettra Oyane sur son chemin, Yessi sera très loin de se douter qu'un événement tragique l'obligera à conjuguer avec une inconnue.À travers deux personnages qui choisiront d'aller à contre-courant, vous vivrez une histoire d'espoir, de découvertes, de renaissance et d'amour.",
        ouLeTrouver: "Amazon 2,99£ " 
    },
    { 
        title: "Les aventures de Jak et Bil au Gabon: Le secret de l'ivoire", 
        author: "Jacques Ortet", 
        cat: "Aventure", 
        img: "avent.png",
        date: "09 septembre 2020",
        description: "Jak, photographe international, toujours accompagné de son ami Bil, est invité au Gabon pour photographier la faune et la flore afin d'illustrer un magasine traitant de la nature et de la diversité du pays. Dès leur arrivée, Bil disparait. Jak se met activement à sa recherche et réalise que, malgré lui, il interfère avec une organisation internationale qui exécute un plan des plus macabres... Une aventure épique dans la forêt équatoriale, la brousse et la savane. L'humour a aussi sa place ainsi qu'une introduction à la culture gabonaise, celle d'un pays extraordinaire.",
        ouLeTrouver: "Amazon 5,00£ " 
    },
    { 
        title: "Adia la honte progressive", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Société", 
        img: "adia.png",
        date: "1985",
        description: "L'histoire de ce roman est centrée sur le personnage principal, Mulélé. Après avoir passé plusieurs années en Europe  notamment à l'université de Valence, puis à Séville, à Madrid  il revient dans sa ville d'origine, Mbatavia, au Gabon, sans diplôme, sans réussite formelle.Frustré, humilié, et confronté à ses proches (parents, épouse, enfant, amis) qui attendaient beaucoup de lui, Mulélé sombre progressivement dans l'alcool pour fuir sa honte.Sa descente entraîne la perte de son emploi, l'éloignement de sa femme (Saïlé) et sa fille, et le glissement de son identité : ce qui devait être un retour triomphal devient un retour douloureux.Le roman explore donc « la honte progressive » - le terme du titre - vécue par un homme qui ne parvient pas à répondre aux attentes et qui se retrouve en marge.",
        ouLeTrouver: "Scribd téléchargement gratuit / Librairie Mollat Bordaux 12,20£" 
    },
    { 
        title: "Le miroir des toubabs", 
        author: "Noël Bertand Boundzanga", 
        cat: "Drame", 
        img: "miroir.png",
        date: "22 décembre 2008",
        description: "Ronger mes ongles, partir. C'est par là que tout commence pour en finir avec ces il faut, avec cette tâche d'aller plus loin. Partir, ouvrir des portes et des portes pour réaliser une promesse. Et puis, il y a ce miroir. De l'autre côté du miroir, il y a ceux qui le regardent.Commence alors une nouvelle aventure avec de nouvelles amitiés. Une histoire d'épreuves, de luttes et de batailles.",
        ouLeTrouver: "Librairie Eyrolles 17,00£ / Fnac 17,00£ /Maison de la Presse 25500 FCFA " 
    },
    { 
        title: "Pascaline dans les flots de la chute", 
        author: "Arnold Nguimbi", 
        cat: "Société", 
        img: "pascaline.png",
        date: "01 novembre 2012",
        description: "La présence au monde de Pascaline tient du miracle. Sa mère a dû accoucher dans une bananeraie faute de maternité. D'ailleurs, sa naissance ne correspondait-elle pas à la crise de l'or noir ? Les autorités politiques justifiaient le manque de structures sanitaires et autres infrastructures par la baisse du prix du baril de pétrole. II fallait donc se battre pour ne pas périr. Il fallait lutter.",
        ouLeTrouver: "Fnac 14,50£ / Amazon 14,50 / Librairies de Libreville/ Maison de la Presse 9000 FCFA" 
    },
    { 
        title: "Le bac des cancres", 
        author: "Patrick Nzoghe Ndo", 
        cat: "Société", 
        img: "bac.png",
        date: "2023",
        description: "Si la duperie de soi a toujours fasciné certaines personnes, c'est vraisemblablement parce qu'il y a quelque chose de profondément énigmatique dans la possibilité même de vouloir croire ce que l'on sait être faux. La pièce théâtrale LE BAC DES CANCRES, exposé l'opportunisme d'un jeune homme au parcours ambigu qui ne s'arrête devant rien pour arriver à ses fins. Dans ses multiples faces, il n'hésite pas à affronter son aîné, à manquer de reconnaissance vis-à-vis de son parrain, à justifier ses actes odieux sous couvert de sa chrétienté et aller s'attaquer aux hommes les plus influents de la société nonobstant leur niveau de spiritualité avancée : les turpitudes de Deny-Le-Chrétien alias LE CANCRE, l'entraineront donc tout droit sur un chemin sans retour au grand désespoir de sa famille.",
        ouLeTrouver: "Maison de la Presse, Libreville " 
    },
    { 
        title: "Identicide", 
        author: "André Zoula", 
        cat: "Mysticisme", 
        img: "zoula.png",
        date: "29 août 2017",
        description: "« Que du sang versé ! du sang de ma terre ! du sang noir! du sang de mes veines! du sang rouge ! du sang de la Nature ! Ma chair est devenue fade. Ma peau anémiée, couleur étrangère, sans goût. Que de larmes versées ! Des larmes orphelines, des larmes aveugles, des larmes noires coulant sur ma terre nourricière. Des larmes innocentes ont ébloui ma vue. De ces larmes, ma pensée originelle est sortie, et je suis resté vide comme un tonneau sans fond [...] Aujourd'hui un soleil rouge présage un avenir radieux. Un soleil nouveau est né. Il brille sur ma terre. Il vient rétablir l'ordre ancien.»",
        ouLeTrouver: "Amazon 2000£ / La Procure 11,88£ / Decitre 12,50£/ Maison de la Presse 18750 FCFA" 
    },
    { 
        title: "Les crudités de la dictature", 
        author: "Arnaud N'zassy", 
        cat: "Société", 
        img: "crudité.png",
        date: "05 mars 2014",
        description: "Les crudités de la dictature est un texte qui décoiffe l'hypocrisie des dictateurs africains. Loin d'une dénonciation naïve, l'auteur dresse à sa manière, le bilan de cinquante années d'indépendance. Le continent africain a fêté avec faste ce que ses dirigeants appellent démocratie. L'auteur rit de son quotidien et nous invite à rire avec lui. Il nous conduit dans l'univers d'un dictateur, le plus beau, le plus sage de tous les dictateurs, un président au sommet de son art, en somme, un imbécile.",
        ouLeTrouver: "Amazon / Cultura 14,00£ / Fnac 14,00£ /Decitre 14,00£/ Maison de la Presse 21000 FCFA" 
    },
    { 
        title: "Rhone-Ogooué", 
        author: "Maurice Okoumba-Nkoghé", 
        cat: "Société", 
        img: "rhne.png",
        date: "01 janvier 1980",
        description: "Dès son premier livre, « Paroles vives écorchées », ce jeune Gabonais forçait l'attention par le besoin profond de communiquer et de révéler à soi-même une parole africaine à travers le « silence éclaté ». Et voici qu'en peu de temps, cette parole s'est affermie-affirmée dans le sens que nous pressentions, « Rhône-Ogooué » n'est pas un « recueil », mais un seul poème en plusieurs chants, une sorte d'épopée de poche parcourue d'expressions singulières, une quête d'absolu étonnamment incarnée dans la difficulté quotidienne. Il y a là une action, une chanson de geste transcendant la négritude, tendue par une évocation quasi-mythique, qui permet au poète de nous toucher au cœur : la recherche de Lilly, « Muse aux bras-lianes », dans les brumes lyonnaises, parmi les « filles des neiges ». Lilly... un nom bien proche de Lilith la femme créée avant Ève, la faunesse nocturne si belle, et noire comme l'était la Sulamite. La jonction imprévue du Rhône de Maurice Scève et de l'Ogooué des grillots, nous vaut cette œuvre originale",
        ouLeTrouver: "Librairie Eyrolles 5,99£" 
    },
    { 
        title: "Akômenga", 
        author: "André Zoula", 
        cat: "Mysticisme", 
        img: "ako.png",
        date: "01 juin 2011",
        description: "Akômenga nous plonge dans les sombres pratiques de la sorcellerie et du maléfique. Le Mal est ici incarné par un homme qui a décidé de tout résoudre par la souffrance. Précurseur du vampirisme, né dans l'horreur et dans le Sang et assoiffé de pouvoir, il ne tardera pas à vaincre son propre sang pour préserver le sang. Akômenga expose avant tout, cet héritage des cultures transformées par les appétits sauvages d'une génération de vieux réfractaires au progrès et prêts a dilapider ce premier patrimoine qu'est l'homme au profit du Mal. C'est une fois de plus la condamnation, non pas des traditions en tant que socle d'un peuple, mais des pratiques nées à partir de ces traditions qui ont peine à s'adapter à la modernité.",
        ouLeTrouver: "Institut français ( Libreville) / Librairie Eyrolles 12,50£ / Fnac / Maison de la Presse 18750 FCFA" 
    },
    { 
        title: "Vers la dépénalisation de l'avortement au Gabon ?", 
        author: "Noëlline Obame et Aimée Patricia Ndembi Ndembi", 
        cat: "Société", 
        img: "avor.png",
        date: "12 mars 2026",
        description: "Au Gabon, l'IVG fait l'objet d'une reconnaissance partielle grâce aux lois de 2018 et 2021 intégrant le motif de « détresse psychologique ». Cependant, ces avancées juridiques se heurtent à de fortes résistances culturelles et institutionnelles.Ce numéro de la Revue gabonaise des conduites humaines réunit politologues, sociologues et psychologues pour analyser ce paradoxe. À travers cinq contributions, l'ouvrage explore les tensions entre natalisme d'État et autonomie reproductive, tout en interrogeant les réalités du terrain. L'enjeu est d'éclairer le fossé entre réforme et pratique sociale. Un dossier nécessaire pour engager un dialogue rigoureux sur les conditions d'une dépénalisation inclusive et équitable en contexte gabonais.",
        ouLeTrouver: "L'Harmattan 17£ / Decitre 12,99£ / Maison de la Presse 25500 FCFA" 
    },
    { 
        title: "Jessica, une vie brisée", 
        author: "Amélie BN", 
        cat: "Drame", 
        img: "jess.png",
        date: "26 janvier 2021",
        description: "Jessica Matsanga est une jeune femme qui aime la vie et tous les plaisirs qu'elle offre. Elle va faire la rencontre de Rémy Desmond, un homme mystérieux qui bouleversera à jamais sa vie.Amour, trahison, passion, blessures, complots, larmes sont les mots qui vont rythmer la vie de Jessica.Jusqu'où cet amour bouleversant va-t-il mener ? Jessica aura t-elle droit au bonheur ?",
        ouLeTrouver: "Amazon 3,00£ " 
    },
    { 
        title: "Moi, Ntsame, la fille des Mapanes", 
        author: "Sona Nkoro-Nguéma", 
        cat: "Société", 
        img: "moi.png",
        date: "Mars 2018",
        description: "Les Mapanes ou Matiti, c'est ainsi qu'on nomme les bidonvilles au Gabon. Ces quartiers de misère qui poussent et se développent parfois au milieu ou juste à côté des quartiers opulents. C'est cette misère qui cotoie la richesse que Ntsame nous narre au travers du récit de sa triste vie, la vie d'une jeune fille gabonaise de famille très modeste et de son combat quotidien pour survivre. Elle dépeint ainsi un portrait de la société gabonaise et du quotidien de sa jeunesse. Un portrait sans excès, sans complexe ou malgré les énormes difficultés de la vie.",
        ouLeTrouver: "Fnac 14,50 £" 
    },
    { 
        title: "Nkani- Une prophétie africaine", 
        author: "Blanchard Onanga Ndjila", 
        cat: "Mysticisme", 
        img: "nkani.png",
        date: "08 janvier 2023",
        description: "Vous suivrez l'évolution de Nkani à travers deux mondes opposés : le monde des vivants et le monde des âmes et des esprits éternels. Bien que sur Terre, Nkani soit un homme humble et très discret, depuis l'au-delà, il deviendra un critique de la société des vivants.Du monde visible au monde invisible, plusieurs thématiques seront abordées telles que la relation père-fils, la prophétie, les traditions ancestrales, le conflit, les valeurs familiales, l'éducation, la politique, la guerre, la religion, la spiritualité, le mysticisme, ou encore, la vie après la mort.Dr Blanchard ONANGA NDJILA est un Américain d'origine gabonaise. Enseignant et spécialiste des institutions politiques américaines, il a dispensé des cours d'anglais, de principes de la communication et de français, à l'Université Omar Bongo du Gabon, à l'Université de l'lowa, et à l'Université William Penn aux États-Unis. Il a par ailleurs été Conseiller du Gabon auprès des Nations Unies. Aujourd'hui, il est professeur d'anglais et de français au Rivermont Collegiate aux États-Unis. Il donne parallèlement des cours à l'Université Omar Bongo du Gabon, en qualité de professeur assistant.",
        ouLeTrouver: "Amazon 25,00£" 
     },
     { 
        title: "Là-bas, ils ne tuent pas les oiseaux dans le ciel", 
        author: "Eric Nonn", 
        cat: "Poésie", 
        img: "nonn.png",
        date: "04 septembre 2014",
        description: "La gare de la Lopé, au Gabon. Sur la place en terre, une case en bois, en planches, en traverses.(...) Une petite fille vêtue en rose. Son cartable aussi est rose, un rose plastique, international. C'est sur ce tempo que s'ouvre l'histoire de Djana, une petite fille en rose, dont le regard vierge et millénaire parcourt la géographie et l'histoire de son pays. Regard innocent et implacable qui perçoit, sous les camouflages divers, les mensonges, les rêves avortées, les folies d'une Afrique dont l'identité, remaquillée à l'occidentale, se dérobe sans cesse. Rythmé comme une mélopée antique, le récit nous entraîne le long de la voie de chemin de fer, vers le fleuve, Libreville et la mer. Dans ce pays rien ne va vraiment mais tous répètent comme une incantation:¨ça va aller¨. Dans une langue roulée en bouche, lisse et sonore comme un chant, Eric Nonn raconte la vie, les rêves, les malheurs, les espoirs, les dangers. Au-delà des cris de désespoir, loin des discours protestataires et vains, il nous donne à voir à travers des yeux d'enfant, la vérité nue d'une Afrique fantôme.",
        ouLeTrouver: "Amazon 27,83 / Fnac 9,99£ / Rakuten 2,20£ " 
    },
    { 
        title: "Une alliance mal aimée", 
        author: "André Zoula", 
        cat: "Sociéte", 
        img: "malaime.png",
        date: "03 octobre 2011",
        description: "Dire ¨oui¨ sous les Tropiques, avec pour seuls témoins le soleil et la mer, n'est pas une simple affaire pour Ben et Exthasis. Leur union devant madame le maire se heurte au coût financier, au poids de l'administration et surtout à une très lourde pression familiale. Parents et grands-parents, frères et soeurs, beaux-frères et belles-soeurs voient ce mariage comme une trahison, une désobéissance. En effet, la coutume veut que celui qui travaille subvienne en priorité aux besoins de la famille au sens large du terme. Ben, lui, en a décidé autrement, il veut fonder sa propre famille et assumer avant tout ses propres charges. Arrivera-t-il au bout de son rêve ?",
        ouLeTrouver: "Amazon 2000£ / Librairie Eyrolles 12,50£ / Fnac " 
    },
    { 
        title: "Sur le chemin de notre amour", 
        author: "Mady Remanda", 
        cat: "Amour", 
        img: "nathan.png", 
        date: "15 juiin 2016",
        description: "Je pris subitement conscience que j'étais toujours plaquée contre son corps ferme et chaud, je ne portais qu'une légère chemise de nuit en satin, et lui un boxer noir. Il était torse nu, et ses longues jambes arquées semblaient s'emboîter dans les miennes. Une douce langueur m'envahit et je sentis monter en moi un trouble profond. Une chaleur insidieuse s'infiltra dans mes reins. Et le désir me submergea inexorablement. I.]- Ici, personne ne viendra nous déranger ! Qu'en penses-tu Sarah ?Je ne sus que répondre, hypnotisée par son regard, Michael était désormais devant moi, les pieds dans l'eau, il tendit doucement sa main, pour écarter mes mains de ma poitrine. Mes seins apparurent, les pointes dressées d'excitation. Je crus défaillir de honte et de plaisir mêlés.De sa main, Michael taquina la pointe érigée de mon sein droit, tandis que son regard de braise cherchait dans le mien une quelconque approbation.",
        ouLeTrouver: "Amazon 8,00£ / Fnac   " 
    },
    { 
        title: "Enfants du firmament -Tome I", 
        author: "Curtis Nah", 
        cat: "Science-fiction", 
        img: "curtis.png",
        date: "13 juin 2025",
        description: "Alors qu'une guerre divise la Voie lactée depuis plusieurs dizaines d'années, seule l'Alliance de la Liberté résiste au mieux contre le Royaume du Sud. Élevés et entraînés pour défendre notamment le Royaume du Nord, l'Alliance de la Liberté et tous ses citoyens - Zeiblitz, Georges, Jade et Iria - rejoignent les célèbres troupes des Red Opps. Pour leur toute première mission, les recrues sont envoyées sur la planète Hellebir afin de découvrir la menace qui plane au-dessus des soldats sur place. Mais cette mission au premier abord facile s'avère en réalité bien plus complexe... Et si Hellebir abritait des secrets susceptibles de secouer l'ordre établi ?",
        ouLeTrouver: "Amazon 19,90£ / Fnac 19,90£  " 
    },
    { 
        title: "Histoire de la famille gabonaise - Découverte du Gabon", 
        author: "Mayer Raymond", 
        cat: "Sociéte", 
        img: "helvin.png",
        date: "25 janvier 2023",
        description: "La grande question du passage des clans et lignages aux familles nucléaires, monoparentales ou recomposées trouve au Gabon des solutions inédites, inscrites dans l'histoire particulière du pays, tout en répondant à une dynamique structurelle plus large. S'interrogeant sur les liens de parenté, de résidence, d'appellations, d'attitudes, d'alliance et de filiation, cet ouvrage sans cesse réédité offre une synthèse complète sur les variantes en usage dans les cinquante cultures ethniques présentes sur cette vaste terre de civilisation bantu.",
        ouLeTrouver: "Cultura 22,99£ / Fnac 29,00£ / L'Harmattan 29,00£/Amazon 29,00£/Kindle Store 22,99£/Google Play Livres " 
    },
    { 
        title: "Avant l'aube", 
        author: "Mayft Nzaou", 
        cat: "Sociéte", 
        img: "teddy.png",
        date: " mars 2013",
        description: "À Libreville, à l'heure où les ombres se mêlent dans les brises du soir, deux inconnus se remarquent dans un café. Le hasard les conduit devant le même cinéma. Le destin semble s'évertuer à les lier l'un à l'autre, alors qu'ils se dévoilent peu à peu, partageant la nuit qui leur est donnée entre séduction timide et charmes secrets de la ville... Délicate et intimiste, la prose de Mayft Nzaou esquisse en clair-obscur les rapports inextricables entre les êtres. Au gré de leurs émois, le monde se métamorphose à travers une série de plans presque cinématographiques et brode un nocturne sensible, où chatoie toute la douceur de vivre.",
        ouLeTrouver: "Amazon 15,01£ / Jets D'Encre 15,00£ / Cultura 15,00£ / Fnac 15,00£ " 
    },
    { 
        title: "Le fils de l'assassin", 
        author: "André Zoula", 
        cat: "Drame", 
        img: "assassin.png",
        date: "18 août 2017",
        description: "Le fils de l’assassin dévoile la trajectoire d’un enfant recueilli par un assassin bien connu, à la suite de la guerre du pétrole qui a dévasté son pays. À la mort de son père assassin, il monte sur le trône, et devient lui aussi assassin.",
        ouLeTrouver: "Amazon 2000£ / La Procure 11,00£ / Librairie Eyrolles 11,00£ " 
    },
     { 
        title: "PARLONS YIPUNU: Langue et culture des punu du Gabon-Congo", 
        author: "Mabik-ma-Kombil", 
        cat: "Société", 
        img: "yipunu.png",
        date: "01 novembre 2001",
        description: "Le yipunu est l'une des langues gabonaises les plus parlées, couvrant la plupart des provinces du pays. Cette méthode est destinée à ceux qui veulent apprendre et acquérir des bases solides en yipunu. Elle donne des éléments de la conversation courante, présente des points de grammaire et un lexique d'environ 3000 mots. L'ouvrage présente également des données sur le fonctionnement de la famille et sur la culture punu.",
        ouLeTrouver: "Amazon 21,00£ / Fnac 21,00£ / L'Harmattan 21,00£ " 
    },
    { 
        title: "Rats, le bol !", 
        author: "André Zoula", 
        cat: "Drame", 
        img: "fatou.png",
        date: "19 novembre 2010",
        description: "Rats, le bol ! est l'itinéraire tragique d'un jeune homme qui, vomi par le système éducatif et/ou politique, décide de prendre les armes pour mettre fin à cette misère. Misère d'un monde peuplé de fous. Misère d'un monde tout en trous. Dans une indifférence totale, causée par les Rats, il relate la triste condition humaine.",
        ouLeTrouver: "Amazon 2000£ / La Procure 11,00£ / Librairie Eyrolles 19,50 " 
    },
    { 
        title: "Ce que le chien a vu à Nzeng Ayong", 
        author: "Collectif Auteurs UDEG", 
        cat: "Société", 
        img: "2015.png",
        date: "24 août 2020",
        description: "Ce recueil de nouvelles est né d’une interrogation sociale autour d’une expression populaire au Gabon évoquant « ce que le chien a vu à Nzeng Ayong », un mystère que tout le monde semble connaître sans jamais l’expliquer. Pour tenter d’en percer le sens, plusieurs écrivains ont été invités à répondre à cette question. Chacun propose une nouvelle originale, vivante et surprenante, explorant cette énigme à travers des regards variés. Ces récits interrogent notre imaginaire, notre identité et nos émotions. Le chien devient alors une figure symbolique, reflet de nos pulsions, de nos peurs, mais aussi de nos espoirs. Ce recueil est une invitation à découvrir ces visions multiples et à partager le plaisir de lecture qu’ont eu ses auteurs à les créer.",
        ouLeTrouver: "Amazon 5,37£ / La Procure 11,00£ / Librairie Eyrolles 19,50 " 
    },
    { 
        title: "La vie de Pahé -Tome 1: Bitam", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "bitam.png",
        date: "09 novembre 2006",
        description: "Partez à destination de Bitam, petite ville au Nord du Gabon en Afrique Centrale dans laquelle Pahé est né. Tout en humour, il raconte les périodes marquantes de son existence : entre autre la cohabitation entre co-épouses au village d'Eboro, sa première rentrée des classes à Libreville, son départ en avion pour la France, la découverte de la neige, de la télévision et du Mammouth puis son retour au pays quelques années plus tard. Une belle fresque de vie qui nous propose un parrallèle drôle et plein de bon sens entre la vie en Afrique et celle en France à travers des yeux d'enfant. Attachant et plein d'humour, Pahé revient ainsi sur son enfance et nous explique comment il en est arrivé là :créer des bandes dessinées !",
        ouLeTrouver: "Amazon 14,00£ / Fnac 5,25£ / Booknode 3,80£ / Maison de la Presse 13975 FCFA" 
    },
    { 
        title: "La vie de Pahé - Tome 2 : Paname", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "paname.png",
        date: "02 avril 2008",
        description: "Il y a des rencontres improbables sur le continent Africain.L'éditeur Pierre Paquet découvre le travail du dessinateur de presse gabonais Pahé en Côte d'Ivoire. Ils se rencontrent au Cameroun où ils décident de travailler ensemble. Avec cette trilogie, Pahé nous retrace sa vie rocambolesque entre les continents africain et européen. Sans tabou, il nous fait partager sa vision du monde et nous parle de la condition d'un homme noir dans nos sociétés modernes avec humour et simplicité. Une œuvre originale et sincère qui nous rappelle que le talent n'a pas de couleur...",
        ouLeTrouver: "Amazon 14,00£ / Fnac 4,02£ /Maison de la Presse 13975 FCFA" 
    },
    { 
        title: "Un dessinateur au Gabon", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "dess.png",
        date: "03 juin 2026",
        description: "Partez à destination de Bitam, petite ville au Nord du Gabon en Afrique Centrale dans laquelle Pahé est né. Tout en humour, il raconte les périodes marquantes de son existence : entre autre la cohabitation entre co-épouses au village d'Eboro, sa première rentrée des classes à Libreville, son départ en avion pour la France, la découverte de la neige, de la télévision et du Mammouth puis son retour au pays quelques années plus tard. Une belle fresque de vie qui nous propose un parrallèle drôle et plein de bon sens entre la vie en Afrique et celle en France à travers des yeux d’enfants ",
        ouLeTrouver: "Fnac 29,90£ / Amazon 29,90£ / Cultura 29,90£ / Maison de la Presse 44850 FCFA" 
    },
    { 
        title:"Dipoula l'albinos -  Tome 1: Mbolo", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "dipoula.png",
        date: "26 novembre 2008",
        description: "Mbolo je suis Dipoula! ¨Mbolo¨ chez moi ça veut dire bonjour. J'habite sur le continent africain au Gabon. Sauf que je suis né Blanc... enfin, je veux dire... Noir... Mais les gens ne me voient pas comme un africain, vu que je suis albinos... Bref c'est un peu compliqué mais avec les copains de l'orphelinat on se moque de la couleur de peau et du coup on s'éclate comme des fous! Même si des fois c'est pas du goût de la mère supérieure...",
        ouLeTrouver: "Fnac 3,78 / Amazon 3,52£ / Maison de la Presse 15750 FCFA " 
    },
    { 
        title:"Dipoula -  Tome 2: Dipoula contre le petit Pahé", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "dipoe.png",
        date: "17 novembre 2010",
        description: "Mbolo je suis Dipoula ! ¨Mbolo¨ chez moi ça veut dire bon jour. J'habite sur le continent africain au Gabon. Sauf que je suis né Blanc... enfin, je veux dire... Noir... Mais les gens ne me voient pas comme un africain, vu que je suis albinos... Bref c'est un peu compliqué mais avec les copains de l'orphelinat on se moque de la couleur de peau et du coup on s'éclate comme des fous ! Même si des fois c'est pas du goût de la mère supérieure...",
        ouLeTrouver: "Fnac 5,00£ / Amazon 3,97£ / Maison de la Presse 15750 FCFA  " 
    },
    { 
        title:"Dipoula -  Tome 3: Dipoula l'albinos", 
        author: "Pahé", 
        cat: "Bande déssinée", 
        img: "33.png",
        date: "08 février 2012",
        description: "Mbolo je suis Dipoula! ¨Mbolo¨ chez moi ça veut dire bonjour. J'habite sur le continent africain au Gabon. Sauf que je suis né Blanc... enfin, je veux dire... Noir... Mais les gens ne me voient pas comme un africain, vu que je suis albinos... Bref c'est un peu compliqué mais avec les copains de l'orphelinat on se moque de la couleur de peau et du coup on s'éclate comme des fous! Même si des fois c'est pas du goût de la mère supérieure...",
        ouLeTrouver: "Fnac 3,28£ / Amazon 3,98£ / BDfugue 10,50£ / Maison de la Presse 15750 FCFA" 
    },
    { 
        title:"Aïcha Lalla Kandisha ou les amoureux de l'hotel la tour Hassan", 
        author: "Eric Joël Békalé", 
        cat: "Mysticisme", 
        img: "aicha.png",
        date: "2025",
        description: "Ce roman est à la croisée des cultures. D'un côté, une légende marocaine, celle d'Aïcha Lalla Kandisha, une femme aussi belle que mystérieuse, qui apparait aux hommes qu'elle séduit avant de les envoûter et les emprisonner dans ses charmes. De l'autre, les rites et traditions du Gabon. L'initiation au Bwiti est le seul moyen pour Flavien, un diplomate en mission, de se libérer de l'esprit d'Aïcha.",
        ouLeTrouver: "Lacroiseedeschemins.ma 18,00£  " 
    },


];

// ==========================================
// 1. CONFIGURATION DE L'ANIMATION (ScrollReveal)
// ==========================================
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 200,
    reset: false
});

sr.reveal('.site-logo', {});
sr.reveal('.hero h1', { delay: 400 });
sr.reveal('.intro', { delay: 600 });

// ==========================================
// 2. BARRE DE PROGRESSION DE LECTURE
// ==========================================
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("scrollProgress");
    if (progressBar) progressBar.style.width = scrolled + "%";
};

// ==========================================
// 3. FONCTION D'AFFICHAGE DES CARTES
// ==========================================
function displayBooks(books) {
    const grid = document.getElementById('booksGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (books.length === 0) {
        grid.innerHTML = '<div class="no-results">Aucun livre trouvé...</div>';
        return;
    }

    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        card.innerHTML = `
            <div class="book-img-container">
                <img src="image livre/${book.img}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/250x350?text=Image+Introuvable'">
            </div>
            <div class="infos">
                <span class="tag">${book.cat}</span>
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="summary">${book.description}</p>
                <button class="find-btn">Voir les détails</button>
            </div>
        `;

        card.addEventListener('click', () => {
            openModal(book);
        });

        grid.appendChild(card);
    });

    sr.reveal('.book-card', { interval: 100 }); 
}

// ==========================================
// 4. FONCTION POUR OUVRIR LA MODALE
// ==========================================
function openModal(book) {
    const modal = document.getElementById('bookModal');
    if (!modal) return;

    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalCat').textContent = book.cat;
    document.getElementById('modalDate').textContent = book.date;
    document.getElementById('modalDesc').textContent = book.description;
    document.getElementById('modalImg').src = `image livre/${book.img}`;

    // --- LOGIQUE DE PARTAGE ---
    const shareWA = document.getElementById('shareWA');
    const shareFB = document.getElementById('shareFB');
    
    if (shareWA && shareFB) {
        const currentUrl = window.location.href;
        const text = encodeURIComponent(`Découvre "${book.title}" de ${book.author} sur L'Okoumé Littéraire !`);
        shareWA.href = `https://api.whatsapp.com/send?text=${text}%20${currentUrl}`;
        shareFB.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    }

    // --- LOGIQUE "OÙ LE TROUVER" ---
    const storeContainer = document.getElementById('modalStore');
    if (storeContainer) {
        const stores = book.ouLeTrouver.split('/'); 
        let storeHTML = '<strong>Disponibilité :</strong><div class="store-list">';
        
        stores.forEach(store => {
            const name = store.trim();
            let icon = '<i class="fa-solid fa-shop"></i>';
            if(name.toLowerCase().includes("amazon")) icon = '<i class="fa-brands fa-amazon"></i>';
            if(name.toLowerCase().includes("fnac")) icon = '<i class="fa-solid fa-cart-shopping"></i>';
            storeHTML += `<span class="store-tag">${icon} ${name}</span>`;
        });
        
        storeHTML += '</div>';
        storeContainer.innerHTML = storeHTML;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ==========================================
// 5. FONCTION POUR FERMER LA MODALE
// ==========================================
function closeModal() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('bookModal');
    if (event.target == modal) {
        closeModal();
    }
}

// ==========================================
// 6. RECHERCHE ET FILTRES
// ==========================================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = romans.filter(b => 
            b.title.toLowerCase().includes(term) || 
            b.author.toLowerCase().includes(term)
        );
        displayBooks(filtered);
    });
}

function filterCategory(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    if (event) event.target.classList.add('active');

    if (category === 'tous') {
        displayBooks(romans);
    } else {
        const filtered = romans.filter(b => b.cat === category);
        displayBooks(filtered);
    }
}

// ==========================================
// 7. LA MAGIE DU TIRAGE AU SORT (Coup de cœur)
// ==========================================
const randomBtn = document.getElementById('randomBtn');

if (randomBtn) {
    randomBtn.addEventListener('click', () => {
        // Sélectionne un livre au hasard dans ton tableau 'romans'
        const randomIndex = Math.floor(Math.random() * romans.length);
        const randomBook = romans[randomIndex];

        // Ouvre directement la modale avec le livre sélectionné
        openModal(randomBook);
    });
}

// ==========================================
// 8. INITIALISATION
// ==========================================
window.onload = () => {
    displayBooks(romans);
};