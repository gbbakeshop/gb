<?php

namespace App\Http\Controllers;

use App\Models\Charge;
use Illuminate\Http\Request;

class ChargeController extends Controller
{

    public function create_charge_credit(Request $request)
    {
        Charge::create([
            'branchid' => $request->branchid,
            'type' => $request->type,
            'userid' => $request->userid,
            'sellerid' => $request->sellerid,
            'amount' => $request->amount,
            'discription' => $request->discription,
            'date' => $request->date,
            'meridiem' => $request->meridiem
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Created Successfully'
        ]);
    }
    public function get_all_credits_charge(Request $request)
    {
        $charge = Charge::where([
            ['branchid', '=', $request->branchid],
            ['date', '=', $request->date],
        ])
            ->when($request->sellerid == 1, function ($query) use ($request) {
                return $query->where('meridiem', '=', $request->meridiem);
            }, function ($query) use ($request) {
            return $query->where('sellerid', '=', $request->sellerid);
        })
            ->with('user')
            ->get();

        return response()->json([
            'status' => $charge,
        ]);
    }
    public function get_account_credits_charge($id)
    {
        $charge = Charge::where('userid', $id)->with('user')->get();
        return response()->json([
            'status' => $charge,
        ]);
    }
}
