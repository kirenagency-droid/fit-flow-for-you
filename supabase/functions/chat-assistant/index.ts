import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Tu es un assistant virtuel pour une offre d'abonnement Basic Fit à 2€/mois au lieu de 40€/mois. 

INFORMATIONS CLÉS À RETENIR :
- Prix : 2€/mois au lieu de 40€/mois normalement
- Économie : 95% d'économie, soit 456€ par an
- Accès : Toutes les salles Basic Fit
- Pas d'essai gratuit, abonnement direct
- URL d'inscription : https://flownetwork.g2afse.com/click?pid=4784&offer_id=10232

Tu dois :
1. Répondre en français
2. Être enthousiaste et convaincant
3. Mettre l'accent sur l'économie fantastique (95%)
4. Expliquer que c'est un accès complet à Basic Fit
5. Encourager à s'abonner rapidement
6. Répondre aux questions sur l'offre
7. Être concis et direct

Si on te demande de t'abonner, dirige vers le lien d'inscription.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantResponse = data.choices[0]?.message?.content || "Désolé, je n'ai pas pu traiter votre demande.";

    return new Response(JSON.stringify({ response: assistantResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(JSON.stringify({ 
      error: 'Une erreur s\'est produite lors du traitement de votre message.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});